import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MealDocument = Meal & Document;

@Schema({ timestamps: false })
export class Meal {
  @Prop({ type: String }) _id!: string;
  @Prop({ required: true }) name!: string;
  @Prop({ required: true }) calories!: number;
  @Prop({ required: true }) protein!: number;
  @Prop({ required: true }) carbs!: number;
  @Prop({ required: true }) fat!: number;
  @Prop({ type: [String] }) mealType!: string[];
  @Prop({ type: [String] }) tags!: string[];
  @Prop({ default: false }) isVegetarian!: boolean;
  @Prop({ default: false }) isVegan!: boolean;
  @Prop({ type: [String] }) mainIngredients!: string[];
  @Prop() cuisineType!: string;
  @Prop() imageUrl!: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
MealSchema.index({ tags: 1, isVegetarian: 1, isVegan: 1 });
