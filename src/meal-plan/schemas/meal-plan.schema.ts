import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MealPlanDocument = MealPlan & Document;

const DayMealSchema = {
  breakfast: { type: String },
  lunch:     { type: String },
  dinner:    { type: String },
};

@Schema({ timestamps: true })
export class MealPlan {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, unique: true })
  userId!: Types.ObjectId;

  @Prop({ type: [DayMealSchema] })
  days!: Array<{
    breakfast?: string;
    lunch?:     string;
    dinner?:    string;
  }>;

  @Prop() avgCalories!: number;
  @Prop() avgProtein!: number;
  @Prop() avgCarbs!: number;
  @Prop() avgFat!: number;
}

export const MealPlanSchema = SchemaFactory.createForClass(MealPlan);
