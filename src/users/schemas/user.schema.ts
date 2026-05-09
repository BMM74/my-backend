import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum ActivityLevel {
  SEDENTARY = 'sedentary',
  LIGHTLY_ACTIVE = 'lightly_active',
  MODERATELY_ACTIVE = 'moderately_active',
  VERY_ACTIVE = 'very_active',
  EXTRA_ACTIVE = 'extra_active',
}

export enum Goal {
  LOSE = 'lose',
  MAINTAIN = 'maintain',
  GAIN = 'gain',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email!: string;

  @Prop({ default: false })
  isVerified!: boolean;

  @Prop({ default: false })
  isProfileComplete!: boolean;

  @Prop()
  age!: number;

  @Prop()
  weight!: number;

  @Prop()
  height!: number;

  @Prop({ enum: Object.values(Gender) })
  gender!: string;

  @Prop({ enum: Object.values(ActivityLevel) })
  activityLevel!: string;

  @Prop({ enum: Object.values(Goal) })
  goal!: string;

  @Prop({
    type: {
      isKeto:              Boolean,
      isVegetarian:        Boolean,
      isVegan:             Boolean,
      allergies:           [String],
      cuisinePreferences:  [String],
      likedIngredients:    [String],
      dislikedIngredients: [String],
      mealsPerDay:         Number,
      spiceTolerance:      String,
    },
    default: {},
  })
  mealPreferences!: Record<string, any>;

  @Prop({
    enum: ['none', 'preferences_saved', 'ratings_done', 'plan_ready'],
    default: 'none',
  })
  mealPlanStatus!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
