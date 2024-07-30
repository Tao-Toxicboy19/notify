export type Nofitication = {
  id: string;
  msg: string;
  isRead: boolean;
  readedAt: Date | null;
  createdAt: Date;
  deletedAt: Date | null;
  user_id: string;
};
