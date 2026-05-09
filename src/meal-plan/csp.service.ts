import { Injectable } from '@nestjs/common';
import { MealDocument } from '../meals/schemas/meal.schema';

interface DayPlan {
  breakfast?: MealDocument;
  lunch?: MealDocument;
  dinner?: MealDocument;
}

interface CspConstraints {
  dailyCalorieTarget: number;
  dailyProteinMin: number;
  mealsPerDay: 2 | 3;
}

@Injectable()
export class CspService {
  buildWeeklyPlan(
    candidates: MealDocument[],
    scoredIds: { mealId: string; score: number }[],
    constraints: CspConstraints,
  ): DayPlan[] | null {
    const scoreMap = new Map(scoredIds.map((s) => [s.mealId, s.score]));

    // Shuffle with score-weighted jitter so regeneration yields different results
    const shuffle = (arr: MealDocument[]) =>
      [...arr].sort(
        (a, b) =>
          (scoreMap.get((b._id as any).toString()) ?? 3) +
          (Math.random() - 0.5) * 2 -
          ((scoreMap.get((a._id as any).toString()) ?? 3) +
            (Math.random() - 0.5) * 2),
      );

    const breakfastPool = shuffle(candidates.filter((m) => m.mealType.includes('breakfast')));
    const lunchPool     = shuffle(candidates.filter((m) => m.mealType.includes('lunch')));
    const dinnerPool    = shuffle(candidates.filter((m) => m.mealType.includes('dinner')));

    const usedMealIds = new Set<string>();
    const plan: DayPlan[] = [];

    for (let day = 0; day < 7; day++) {
      const dayPlan = this.solveDay(
        breakfastPool,
        lunchPool,
        dinnerPool,
        constraints,
        usedMealIds,
      );

      if (!dayPlan) return null;

      if (dayPlan.breakfast)
        usedMealIds.add((dayPlan.breakfast._id as any).toString());
      if (dayPlan.lunch)
        usedMealIds.add((dayPlan.lunch._id as any).toString());
      if (dayPlan.dinner)
        usedMealIds.add((dayPlan.dinner._id as any).toString());

      plan.push(dayPlan);
    }

    return plan;
  }

  private solveDay(
    breakfastPool: MealDocument[],
    lunchPool: MealDocument[],
    dinnerPool: MealDocument[],
    constraints: CspConstraints,
    usedIds: Set<string>,
  ): DayPlan | null {
    const calTarget = constraints.dailyCalorieTarget;
    const proteinMin = constraints.dailyProteinMin;

    for (const breakfast of breakfastPool) {
      if (usedIds.has((breakfast._id as any).toString())) continue;

      for (const lunch of lunchPool) {
        if (usedIds.has((lunch._id as any).toString())) continue;
        if (
          (lunch._id as any).toString() ===
          (breakfast._id as any).toString()
        )
          continue;

        for (const dinner of dinnerPool) {
          if (usedIds.has((dinner._id as any).toString())) continue;
          if (
            (dinner._id as any).toString() ===
            (breakfast._id as any).toString()
          )
            continue;
          if (
            (dinner._id as any).toString() === (lunch._id as any).toString()
          )
            continue;

          const totalProtein =
            breakfast.protein + lunch.protein + dinner.protein;
          const cuisines = [
            breakfast.cuisineType,
            lunch.cuisineType,
            dinner.cuisineType,
          ];
          const uniqueCuisines = new Set(cuisines).size;

          if (totalProtein >= proteinMin && uniqueCuisines >= 2) {
            return { breakfast, lunch, dinner };
          }
        }
      }
    }

    return this.solveDayRelaxed(
      breakfastPool,
      lunchPool,
      dinnerPool,
      constraints,
      usedIds,
    );
  }

  private solveDayRelaxed(
    breakfastPool: MealDocument[],
    lunchPool: MealDocument[],
    dinnerPool: MealDocument[],
    constraints: CspConstraints,
    usedIds: Set<string>,
  ): DayPlan | null {
    const proteinMin = constraints.dailyProteinMin * 0.8;

    for (const breakfast of breakfastPool) {
      if (usedIds.has((breakfast._id as any).toString())) continue;
      for (const lunch of lunchPool) {
        if (usedIds.has((lunch._id as any).toString())) continue;
        for (const dinner of dinnerPool) {
          if (usedIds.has((dinner._id as any).toString())) continue;
          const prot = breakfast.protein + lunch.protein + dinner.protein;
          if (prot >= proteinMin) {
            return { breakfast, lunch, dinner };
          }
        }
      }
    }
    return null;
  }
}
