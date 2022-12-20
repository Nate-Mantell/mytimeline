import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimelineModule } from './resources/timeline/timeline.module';
import { TimelineEventModule } from './resources/timeline-event/timeline-event.module';
import { UserModule } from './resources/user/user.module';
import { UtilsService } from './services/utils/utils.service';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [TimelineModule, TimelineEventModule, UserModule],
  controllers: [AppController],
  providers: [AppService, UtilsService, PrismaService],
})
export class AppModule {}
