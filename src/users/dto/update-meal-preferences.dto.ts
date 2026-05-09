import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMealPreferencesDto {
  @IsBoolean()
  isKeto!: boolean;

  @IsBoolean()
  isVegetarian!: boolean;

  @IsBoolean()
  isVegan!: boolean;

  @IsArray()
  @IsOptional()
  allergies?: string[];

  @IsArray()
  @IsOptional()
  cuisinePreferences?: string[];

  @IsArray()
  @IsOptional()
  likedIngredients?: string[];

  @IsArray()
  @IsOptional()
  dislikedIngredients?: string[];

  @IsInt()
  @IsIn([2, 3])
  mealsPerDay!: number;

  @IsString()
  @IsIn(['low', 'medium', 'high'])
  spiceTolerance!: string;
}
