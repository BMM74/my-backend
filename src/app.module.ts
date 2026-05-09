import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MealsModule } from './meals/meals.module';
import { RatingsModule } from './ratings/ratings.module';
import { MealPlanModule } from './meal-plan/meal-plan.module';
import { ActivitiesModule } from './activities/activities.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({ uri: cfg.get<string>('mongoUri') }),
    }),
    AuthModule,
    UsersModule,
    MealsModule,
    RatingsModule,
    MealPlanModule,
    ActivitiesModule,
  ],
})
export class AppModule {}
