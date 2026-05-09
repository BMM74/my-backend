import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Rating, RatingDocument } from './schemas/rating.schema';

@Injectable()
export class RatingsService {
  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<RatingDocument>,
  ) {}

  async saveBatch(
    userId: string,
    ratings: { mealId: string; rating: number }[],
  ): Promise<void> {
    const ops = ratings.map((r) => ({
      updateOne: {
        filter: {
          userId: new Types.ObjectId(userId),
          mealId: r.mealId,
        },
        update: { $set: { rating: r.rating } },
        upsert: true,
      },
    }));
    await this.ratingModel.bulkWrite(ops);
  }

  async getUserRatingsMap(userId: string): Promise<Record<string, number>> {
    const ratings = await this.ratingModel
      .find({ userId: new Types.ObjectId(userId) })
      .lean();
    const map: Record<string, number> = {};
    ratings.forEach((r) => {
      map[r.mealId.toString()] = r.rating;
    });
    return map;
  }

  async getAllRatingsGrouped(): Promise<Record<string, Record<string, number>>> {
    const all = await this.ratingModel.find().lean();
    const grouped: Record<string, Record<string, number>> = {};
    all.forEach((r) => {
      const uid = r.userId.toString();
      if (!grouped[uid]) grouped[uid] = {};
      grouped[uid][r.mealId.toString()] = r.rating;
    });
    return grouped;
  }

  async getRatedMealIds(userId: string): Promise<string[]> {
    const ratings = await this.ratingModel
      .find({ userId: new Types.ObjectId(userId) })
      .lean();
    return ratings.map((r) => r.mealId.toString());
  }
}
