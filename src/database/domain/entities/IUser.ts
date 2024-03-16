import type { IPost } from './IPost';

export interface IUser {
  id: number;
  name: string;
  role: string;
  posts?: IPost[];
  password: string;
}
