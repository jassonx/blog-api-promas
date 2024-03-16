import type { IUser } from '../entities/IUser';

export interface IUserRepository {
  create(data: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(id: number): Promise<IUser>;
  login(data: any): Promise<IUser>;
  delete(id: number): Promise<string>;
}
