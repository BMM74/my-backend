import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal, MealDocument } from './schemas/meal.schema';

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private mealModel: Model<MealDocument>) {}

  async getFiltered(prefs: {
    isKeto?: boolean;
    isVegetarian?: boolean;
    isVegan?: boolean;
    allergies?: string[];
    dislikedIngredients?: string[];
  }): Promise<MealDocument[]> {
    const query: Record<string, any> = {};

    if (prefs.isVegan) query.isVegan = true;
    else if (prefs.isVegetarian) query.isVegetarian = true;

    if (prefs.isKeto) query.tags = { $in: ['keto'] };

    const excluded = [
      ...(prefs.allergies ?? []),
      ...(prefs.dislikedIngredients ?? []),
    ];
    if (excluded.length > 0) {
      query.mainIngredients = { $nin: excluded };
    }

    return this.mealModel.find(query).lean();
  }

  async getRatingCandidates(
    _userId: string,
    prefs: Record<string, any>,
    alreadyRatedIds: string[],
  ): Promise<MealDocument[]> {
    const filtered = await this.getFiltered(prefs);

    const unrated = filtered.filter(
      (m) => !alreadyRatedIds.includes((m._id as any).toString()),
    );

    const scored = unrated.map((meal) => {
      let score = 0;
      if (prefs.cuisinePreferences?.includes(meal.cuisineType)) score += 2;
      if (
        prefs.likedIngredients?.some((ing: string) =>
          meal.mainIngredients.includes(ing),
        )
      )
        score += 1;
      return { meal, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const top30 = scored.slice(0, 30).map((s) => s.meal);
    const shuffled = top30.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }

  async findByIds(ids: string[]): Promise<MealDocument[]> {
    return this.mealModel.find({ _id: { $in: ids } }).lean();
  }

  async findAll(): Promise<MealDocument[]> {
    return this.mealModel.find().lean();
  }
}
