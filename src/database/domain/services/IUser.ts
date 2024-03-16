import type { IUser } from '../entities/IUser';

export interface IUserService {
  getUser(name: string): Promise<any>;
  getUsers(): Promise<any>;
  getUserById(id: string): Promise<any>;
  createUser(data: IUser): Promise<any>;
}
