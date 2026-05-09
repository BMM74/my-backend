import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealPlanService } from './meal-plan.service';
import { MealPlanController } from './meal-plan.controller';
import { MealPlan, MealPlanSchema } from './schemas/meal-plan.schema';
import { KnnService } from './knn.service';
import { CspService } from './csp.service';
import { MealsModule } from '../meals/meals.module';
import { RatingsModule } from '../ratings/ratings.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MealPlan.name, schema: MealPlanSchema },
    ]),
    MealsModule,
    RatingsModule,
    UsersModule,
  ],
  providers: [MealPlanService, KnnService, CspService],
  controllers: [MealPlanController],
})
export class MealPlanModule {}
