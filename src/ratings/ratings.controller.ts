import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { BatchRateDto } from './dto/batch-rate.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { UsersService } from '../users/users.service';
import type { UserDocument } from '../users/schemas/user.schema';

@Controller('ratings')
@UseGuards(JwtAuthGuard)
export class RatingsController {
  constructor(
    private ratingsService: RatingsService,
    private usersService: UsersService,
  ) {}

  @Post('batch')
  async batchRate(
    @CurrentUser() user: UserDocument,
    @Body() dto: BatchRateDto,
  ) {
    await this.ratingsService.saveBatch(
      (user._id as any).toString(),
      dto.ratings,
    );
    await this.usersService.updateMealPlanStatus(
      (user._id as any).toString(),
      'ratings_done',
    );
    return { message: 'Ratings saved' };
  }
}
