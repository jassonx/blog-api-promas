import type { IUser } from '../entities/IUser';

export interface IUserRepository {
  create(data: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  findByName(name: string): Promise<IUser>;
}
