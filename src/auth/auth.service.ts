import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import * as sgMail from '@sendgrid/mail';
import { Otp, OtpDocument } from './schemas/otp.schema';
import { User, UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Otp.name) private otpModel: Model<OtpDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    const apiKey = this.configService.get<string>('SENDGRID_API_KEY');
    if (apiKey) {
      sgMail.setApiKey(apiKey);
    }
  }

  async sendOtp(email: string): Promise<{ message: string; code: string }> {
    
    const code = '123456';
    console.log(`✅ OTP for ${email}: ${code}`);
    const hashedCode = await bcrypt.hash(code, 10);

    await this.otpModel.deleteMany({ email });
    await this.otpModel.create({
      email,
      hashedCode,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    try {
      const sendgridApiKey = this.configService.get<string>('SENDGRID_API_KEY');
      const sendgridFromEmail = this.configService.get<string>('SENDGRID_FROM_EMAIL');

      if (sendgridApiKey && sendgridFromEmail) {
        await sgMail.send({
          to: email,
          from: sendgridFromEmail,
          subject: 'Your verification code',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
              <h2 style="color: #333;">Your Verification Code</h2>
              <p>Your one-time verification code is:</p>
              <h2 style="letter-spacing: 8px; background: #f0f0f0; padding: 20px; text-align: center; border-radius: 5px;">${code}</h2>
              <p style="color: #666; font-size: 14px;">This code expires in <strong>5 minutes</strong>.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              <p style="color: #999; font-size: 12px;">If you didn't request this code, please ignore this email.</p>
            </div>
          `,
        });
        console.log(`✉️ OTP email sent successfully to ${email}`);
      } else {
        console.warn('⚠️ SendGrid not configured. OTP code logged to console only.');
      }
    } catch (error) {
      console.error('❌ SendGrid Error:', error);
      throw new InternalServerErrorException('Failed to send OTP. Please try again.');
    }

    return { message: 'OTP sent successfully', code };
  }

  async verifyOtp(
    email: string,
    code: string,
  ): Promise<{ token: string; isProfileComplete: boolean }> {
    const otpRecord = await this.otpModel.findOne({ email });
    if (!otpRecord) {
      throw new UnauthorizedException('No OTP found. Please request a new one.');
    }

    if (otpRecord.expiresAt < new Date()) {
      await this.otpModel.deleteMany({ email });
      throw new UnauthorizedException('OTP has expired. Please request a new one.');
    }

    const isValid = await bcrypt.compare(code, otpRecord.hashedCode);
    if (!isValid) {
      throw new UnauthorizedException('Invalid OTP code.');
    }

    await this.otpModel.deleteMany({ email });

    const user = await this.userModel.findOneAndUpdate(
      { email },
      { $set: { email, isVerified: true } },
      { upsert: true, new: true },
    );

    const token = this.jwtService.sign({
      sub: (user._id as any).toString(),
      email: user.email,
    });

    return { token, isProfileComplete: user.isProfileComplete };
  }
}