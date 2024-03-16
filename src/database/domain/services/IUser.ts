import type { IUser } from '../entities/IUser';

export interface IUserService {
  login(data: any): Promise<any>;
  getUsers(): Promise<any>;
  getUserById(id: number): Promise<any>;
  createUser(data: IUser): Promise<IUser>;
  deleteUser(id: number): Promise<any>;
}
