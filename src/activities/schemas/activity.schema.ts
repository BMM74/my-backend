import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ActivityDocument = Activity & Document;

@Schema({ timestamps: true })
export class Activity {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, index: true })
  userId!: Types.ObjectId;

  @Prop({ required: true })
  activityType!: string;

  @Prop({ required: true })
  activityLabel!: string;

  @Prop({ required: true, min: 1 })
  durationMinutes!: number;

  @Prop({ required: true })
  intensity!: string;

  @Prop({ required: true })
  caloriesBurned!: number;

  @Prop({ default: '' })
  notes!: string;

  @Prop({ required: true })
  loggedAt!: Date;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
ActivitySchema.index({ userId: 1, loggedAt: -1 });
