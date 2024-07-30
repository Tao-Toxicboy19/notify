import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { Nofitication } from './types/notify.type';
import { randomUUID } from 'crypto';

@Injectable()
export class NotificationService {
  private readonly notis: Nofitication[] = [];

  constructor(private readonly notificationGateway: NotificationGateway) {}

  async createNotification() {
    const msg: Nofitication = {
      id: randomUUID(),
      msg: 'hello world',
      isRead: false,
      createdAt: new Date(),
      readedAt: null,
      deletedAt: null,
      user_id: 'toxicboy',
    };
    this.notificationGateway.sendMsg(msg);
    this.notis.push(msg);
  }

  async getNotification(): Promise<Nofitication[]> {
    return this.notis;
  }

  async update(): Promise<void> {
    this.notis.map((notification) => {
      if (notification.user_id === 'toxicboy') {
        notification.isRead = true;
        notification.readedAt = new Date();
      }
    });
  }

  async delete(id: string): Promise<void> {
    const index = this.notis.findIndex(
      (notification) => notification.id === id,
    );
    if (index !== -1) {
      this.notis.splice(index, 1);
    }
  }
}
