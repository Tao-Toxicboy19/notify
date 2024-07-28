import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification/notification.gateway';

@Injectable()
export class AppService {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  getHello(): string {
    this.notificationGateway.sendMsg('hello world')
    return 'Hello World!';
  }
}