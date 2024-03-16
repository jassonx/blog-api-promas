import type { IUser } from './IUser';

export interface IPost {
  id: number;
  title: string;
  content: string;
  user?: IUser;
}
