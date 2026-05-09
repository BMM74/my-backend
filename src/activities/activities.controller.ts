import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { UserDocument } from '../users/schemas/user.schema';

@Controller('activities')
@UseGuards(JwtAuthGuard)
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Get('types')
  getTypes() {
    return this.activitiesService.getActivityTypes();
  }

  @Get('stats')
  getStats(
    @CurrentUser() user: UserDocument,
    @Query('range') range: 'today' | 'week' | 'month' | 'year' = 'today',
  ) {
    return this.activitiesService.getStats((user._id as any).toString(), range);
  }

  @Get()
  getActivities(
    @CurrentUser() user: UserDocument,
    @Query('range') range: 'today' | 'week' | 'month' | 'year' = 'today',
  ) {
    return this.activitiesService.getByRange((user._id as any).toString(), range);
  }

  @Post()
  create(@CurrentUser() user: UserDocument, @Body() dto: CreateActivityDto) {
    return this.activitiesService.create(user, dto);
  }

  @Delete(':id')
  delete(@CurrentUser() user: UserDocument, @Param('id') id: string) {
    return this.activitiesService.delete((user._id as any).toString(), id);
  }
}
