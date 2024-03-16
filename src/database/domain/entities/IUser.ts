import { IPost } from './IPost';

export interface IUser {
  id: string;
  name: string;
  role: string;
  posts?: IPost[];
  password: string;
}
