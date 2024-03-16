import type { IUser } from '../entities/IUser';

export interface IUserRepository {
  create(data: IUser): Promise<any>;
  findAll(): Promise<any>;
  findById(id: string): Promise<any>;
  findByName(name: string): Promise<any>;
}
