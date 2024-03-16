import { IPost } from '../entities/IPost';

export interface IPostService {
  (): Promise<any>;
  filter(data: any): Promise<IPost[]>;
  createPost(data: IPost): Promise<IPost>;
}
