import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateMealPreferencesDto } from './dto/update-meal-preferences.dto';
import { HealthService, HealthMetrics } from '../health/health.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private healthService: HealthService,
  ) {}

  async updateProfile(userId: string, dto: UpdateProfileDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(
      userId,
      { $set: { ...dto, isProfileComplete: true } },
      { new: true },
    );
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateMealPreferences(
    userId: string,
    dto: UpdateMealPreferencesDto,
  ): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(
      userId,
      { $set: { mealPreferences: dto, mealPlanStatus: 'preferences_saved' } },
      { new: true },
    );
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateMealPlanStatus(userId: string, status: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, {
      $set: { mealPlanStatus: status },
    });
  }

  async getMe(userId: string): Promise<{ user: User; metrics: HealthMetrics | null }> {
    const user = await this.userModel.findById(userId).lean();
    if (!user) throw new NotFoundException('User not found');

    if (!user.isProfileComplete) {
      return { user, metrics: null };
    }

    const metrics = this.healthService.compute(
      user.weight,
      user.height,
      user.age,
      user.gender,
      user.activityLevel,
      user.goal,
    );

    return { user, metrics };
  }
}
