import { IsEnum, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ActivityLevel, Gender, Goal } from '../schemas/user.schema';

export class UpdateProfileDto {
  @IsOptional()
  @IsInt()
  @Min(10)
  @Max(120)
  age?: number;

  @IsOptional()
  @IsNumber()
  @Min(20)
  @Max(500)
  weight?: number;

  @IsOptional()
  @IsNumber()
  @Min(50)
  @Max(300)
  height?: number;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsEnum(ActivityLevel)
  activityLevel?: ActivityLevel;

  @IsOptional()
  @IsEnum(Goal)
  goal?: Goal;
}
