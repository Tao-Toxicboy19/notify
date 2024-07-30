import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch()
  async update() {
    return this.notificationService.update();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notificationService.delete(id);
  }
}
