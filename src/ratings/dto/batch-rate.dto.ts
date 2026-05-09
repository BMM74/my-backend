import { Type } from 'class-transformer';
import {
  IsArray,
  IsString,
  IsNumber,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

class RatingItemDto {
  @IsString()
  mealId!: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating!: number;
}

export class BatchRateDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatingItemDto)
  ratings!: RatingItemDto[];
}
