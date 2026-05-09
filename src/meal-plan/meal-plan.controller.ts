import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { MealsService } from '../meals/meals.service';
import { RatingsService } from '../ratings/ratings.service';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { UserDocument } from '../users/schemas/user.schema';

@Controller('meal-plan')
@UseGuards(JwtAuthGuard)
export class MealPlanController {
  constructor(
    private mealPlanService: MealPlanService,
    private mealsService: MealsService,
    private ratingsService: RatingsService,
    private usersService: UsersService,
  ) {}

  @Get('candidates')
  async getCandidates(@CurrentUser() user: UserDocument) {
    const ratedIds = await this.ratingsService.getRatedMealIds(
      (user._id as any).toString(),
    );
    return this.mealsService.getRatingCandidates(
      (user._id as any).toString(),
      user.mealPreferences,
      ratedIds,
    );
  }

  @Post('generate')
  async generate(@CurrentUser() user: UserDocument) {
    const plan = await this.mealPlanService.generate(user);
    await this.usersService.updateMealPlanStatus(
      (user._id as any).toString(),
      'plan_ready',
    );
    return plan;
  }

  @Get('current')
  getCurrent(@CurrentUser() user: UserDocument) {
    return this.mealPlanService.getCurrent((user._id as any).toString());
  }
}
