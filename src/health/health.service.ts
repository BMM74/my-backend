import { Injectable } from '@nestjs/common';

const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary: 1.2,
  lightly_active: 1.375,
  moderately_active: 1.55,
  very_active: 1.725,
  extra_active: 1.9,
};

const CALORIE_OFFSETS: Record<string, number> = {
  lose: -500,
  maintain: 0,
  gain: 300,
};

export interface HealthMetrics {
  bmi: number;
  bmr: number;
  tdee: number;
  dailyCalories: number;
}

@Injectable()
export class HealthService {
  compute(
    weight: number,
    height: number,
    age: number,
    gender: string,
    activityLevel: string,
    goal: string,
  ): HealthMetrics {
    const heightM = height / 100;

    const bmi = parseFloat((weight / heightM ** 2).toFixed(1));

    // Mifflin-St Jeor equation
    const bmr = parseFloat(
      (
        10 * weight +
        6.25 * height -
        5 * age +
        (gender === 'male' ? 5 : -161)
      ).toFixed(0),
    );

    const multiplier = ACTIVITY_MULTIPLIERS[activityLevel] ?? 1.2;
    const tdee = parseFloat((bmr * multiplier).toFixed(0));

    const offset = CALORIE_OFFSETS[goal] ?? 0;
    const dailyCalories = parseFloat((tdee + offset).toFixed(0));

    return { bmi, bmr, tdee, dailyCalories };
  }
}
