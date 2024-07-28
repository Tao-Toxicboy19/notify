import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  private readonly notis: string[] = [];

  constructor(private readonly notificationGateway: NotificationGateway) {}

  async createNotification() {
    const msg = 'hello world';
    this.notificationGateway.sendMsg(msg);
    this.notis.push(msg);
  }

  async getNotification(): Promise<string[]> {
    return this.notis;
  }
}
