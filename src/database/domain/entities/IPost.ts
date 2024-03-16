import { IUser } from './IUser';

export interface IPosts {
  id: string;
  title: string;
  content: string;
  user: IUser;
}
