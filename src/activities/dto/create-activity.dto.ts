import { IsDateString, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  activityType!: string;

  @IsInt()
  @Min(1)
  durationMinutes!: number;

  @IsDateString()
  loggedAt!: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
