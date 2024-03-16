import { IPost } from '../entities/IPost';

export interface IPostRepository {
  create(data: IPost): Promise<IPost>;
  findAll(): Promise<IPost[]>;
  filter(data: any): Promise<IPost[]>;
}
