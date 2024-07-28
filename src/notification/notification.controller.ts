import { Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async getNotification() {
    return this.notificationService.getNotification();
  }

  @Post()
  async create() {
    return this.notificationService.createNotification();
  }
}
