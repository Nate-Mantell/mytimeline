import { Module } from '@nestjs/common';
import { TimelineEventService } from './timeline-event.service';
import { TimelineEventController } from './timeline-event.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  controllers: [TimelineEventController],
  providers: [TimelineEventService],
  imports: [PrismaModule],
})
export class TimelineEventModule {}
