import { IPosts } from './IPost';

export interface IUser {
  id: string;
  name: string;
  posts?: IPosts[];
  password: string;
}
