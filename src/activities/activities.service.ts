import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Activity, ActivityDocument } from './schemas/activity.schema';
import { CreateActivityDto } from './dto/create-activity.dto';
import { MET_TABLE, computeCalories } from './met-values';
import { UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity.name) private activityModel: Model<ActivityDocument>,
  ) {}

  async create(user: UserDocument, dto: CreateActivityDto): Promise<ActivityDocument> {
    const entry = MET_TABLE[dto.activityType];
    if (!entry) throw new BadRequestException(`Unknown activity type: ${dto.activityType}`);

    const caloriesBurned = computeCalories(dto.activityType, dto.durationMinutes, user.weight ?? 70);

    return this.activityModel.create({
      userId:          user._id,
      activityType:    dto.activityType,
      activityLabel:   entry.label,
      durationMinutes: dto.durationMinutes,
      intensity:       entry.intensity,
      caloriesBurned,
      notes:           dto.notes ?? '',
      loggedAt:        new Date(dto.loggedAt),
    });
  }

  async getByRange(userId: string, range: 'today' | 'week' | 'month' | 'year'): Promise<ActivityDocument[]> {
    const from = this.getRangeStart(range);
    return this.activityModel
      .find({ userId: new Types.ObjectId(userId), loggedAt: { $gte: from } })
      .sort({ loggedAt: -1 })
      .lean();
  }

  async getStats(userId: string, range: 'today' | 'week' | 'month' | 'year') {
    const from = this.getRangeStart(range);
    const activities = await this.activityModel
      .find({ userId: new Types.ObjectId(userId), loggedAt: { $gte: from } })
      .lean();

    if (activities.length === 0) {
      return { totalCalories: 0, totalMinutes: 0, sessionCount: 0, mostFrequent: null };
    }

    const totalCalories = activities.reduce((s, a) => s + a.caloriesBurned, 0);
    const totalMinutes  = activities.reduce((s, a) => s + a.durationMinutes, 0);
    const sessionCount  = activities.length;

    const freq: Record<string, number> = {};
    activities.forEach((a) => { freq[a.activityLabel] = (freq[a.activityLabel] ?? 0) + 1; });
    const mostFrequent = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];

    return { totalCalories, totalMinutes, sessionCount, mostFrequent };
  }

  async delete(userId: string, activityId: string): Promise<void> {
    await this.activityModel.deleteOne({
      _id: new Types.ObjectId(activityId),
      userId: new Types.ObjectId(userId),
    });
  }

  getActivityTypes() {
    const grouped: Record<string, { key: string; label: string; intensity: string }[]> = {};
    Object.entries(MET_TABLE).forEach(([key, val]) => {
      if (!grouped[val.category]) grouped[val.category] = [];
      grouped[val.category].push({ key, label: val.label, intensity: val.intensity });
    });
    return grouped;
  }

  private getRangeStart(range: string): Date {
    const now = new Date();
    switch (range) {
      case 'today': {
        const d = new Date(now);
        d.setHours(0, 0, 0, 0);
        return d;
      }
      case 'week':  return new Date(now.getTime() - 7   * 24 * 60 * 60 * 1000);
      case 'month': return new Date(now.getTime() - 30  * 24 * 60 * 60 * 1000);
      case 'year':  return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      default: {
        const d = new Date(now);
        d.setHours(0, 0, 0, 0);
        return d;
      }
    }
  }
}
