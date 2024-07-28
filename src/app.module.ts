import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationGateway } from './notification/notification.gateway';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationModule],
  controllers: [AppController],
  providers: [AppService, NotificationGateway],
})
export class AppModule {}
