import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MealPlan, MealPlanDocument } from './schemas/meal-plan.schema';
import { MealsService } from '../meals/meals.service';
import { RatingsService } from '../ratings/ratings.service';
import { KnnService } from './knn.service';
import { CspService } from './csp.service';
import { UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class MealPlanService {
  constructor(
    @InjectModel(MealPlan.name) private planModel: Model<MealPlanDocument>,
    private mealsService: MealsService,
    private ratingsService: RatingsService,
    private knnService: KnnService,
    private cspService: CspService,
  ) {}

  async generate(user: UserDocument): Promise<MealPlanDocument> {
    const prefs = user.mealPreferences;
    const userId = (user._id as any).toString();

    if (!prefs || Object.keys(prefs).length === 0) {
      throw new BadRequestException('Please complete meal preferences first.');
    }

    // 1. Filter meals by hard dietary constraints
    const filtered = await this.mealsService.getFiltered(prefs);
    const filteredIds = filtered.map((m) => (m._id as any).toString());

    // 2. Fetch ratings data for KNN
    const [currentUserRatings, allRatings] = await Promise.all([
      this.ratingsService.getUserRatingsMap(userId),
      this.ratingsService.getAllRatingsGrouped(),
    ]);

    // 3. Score candidates with KNN
    const scored = this.knnService.getScoredCandidates(
      allRatings,
      userId,
      currentUserRatings,
      filteredIds,
    );

    // 4. Build 7-day plan with CSP
    const dailyCalorieTarget = this.computeCalorieTarget(user);
    const dailyProteinMin = (user.weight ?? 70) * 0.8;

    const weekPlan = this.cspService.buildWeeklyPlan(filtered, scored, {
      dailyCalorieTarget,
      dailyProteinMin,
      mealsPerDay: (prefs.mealsPerDay ?? 3) as 2 | 3,
    });

    if (!weekPlan) {
      throw new BadRequestException(
        'Could not build a valid plan. Try relaxing preferences.',
      );
    }

    // 5. Compute plan nutrition averages
    const allMeals = weekPlan
      .flatMap((d) => [d.breakfast, d.lunch, d.dinner])
      .filter((m): m is NonNullable<typeof m> => m != null);

    const avg = (arr: number[]) =>
      Math.round(arr.reduce((a, b) => a + b, 0) / weekPlan.length);

    // 6. Upsert — regenerating replaces the old plan
    const saved = await this.planModel.findOneAndUpdate(
      { userId: new Types.ObjectId(userId) },
      {
        $set: {
          userId: new Types.ObjectId(userId),
          days: weekPlan.map((d) => ({
            breakfast: (d.breakfast?._id as any) ?? null,
            lunch: (d.lunch?._id as any) ?? null,
            dinner: (d.dinner?._id as any) ?? null,
          })),
          avgCalories: avg(allMeals.map((m) => m.calories)),
          avgProtein: avg(allMeals.map((m) => m.protein)),
          avgCarbs: avg(allMeals.map((m) => m.carbs)),
          avgFat: avg(allMeals.map((m) => m.fat)),
        },
      },
      { upsert: true, new: true },
    );

    return this.getCurrent(userId);
  }

  async getCurrent(userId: string): Promise<any | null> {
    const plan = await this.planModel
      .findOne({ userId: new Types.ObjectId(userId) })
      .lean();

    if (!plan) return null;

    // Collect all unique meal IDs from the days
    const mealIds = [
      ...new Set(
        plan.days.flatMap((d) =>
          [d.breakfast, d.lunch, d.dinner].filter(Boolean) as string[],
        ),
      ),
    ];
    const meals = await this.mealsService.findByIds(mealIds);
    const mealMap = Object.fromEntries(meals.map((m) => [(m as any)._id, m]));

    return {
      ...plan,
      days: plan.days.map((d) => ({
        breakfast: d.breakfast ? mealMap[d.breakfast] ?? d.breakfast : undefined,
        lunch:     d.lunch     ? mealMap[d.lunch]     ?? d.lunch     : undefined,
        dinner:    d.dinner    ? mealMap[d.dinner]    ?? d.dinner    : undefined,
      })),
    };
  }

  private computeCalorieTarget(user: UserDocument): number {
    const { weight, height, age, gender, activityLevel, goal } = user;
    const bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      (gender === 'male' ? 5 : -161);
    const multipliers: Record<string, number> = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extra_active: 1.9,
    };
    const tdee = bmr * (multipliers[activityLevel] ?? 1.2);
    const offsets: Record<string, number> = { lose: -500, maintain: 0, gain: 300 };
    return Math.round(tdee + (offsets[goal] ?? 0));
  }
}
