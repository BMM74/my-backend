import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateMealPreferencesDto } from './dto/update-meal-preferences.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { UserDocument } from './schemas/user.schema';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Patch('profile')
  updateProfile(
    @CurrentUser() user: UserDocument,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.usersService.updateProfile((user._id as any).toString(), dto);
  }

  @Get('me')
  getMe(@CurrentUser() user: UserDocument) {
    return this.usersService.getMe((user._id as any).toString());
  }

  @Patch('meal-preferences')
  updateMealPreferences(
    @CurrentUser() user: UserDocument,
    @Body() dto: UpdateMealPreferencesDto,
  ) {
    return this.usersService.updateMealPreferences(
      (user._id as any).toString(),
      dto,
    );
  }
}
