import type { IPost } from '../entities/IPost';

export interface IPostService {
  filter(data: any): Promise<IPost[]>;
  getPosts(): Promise<IPost[]>;
  createPost(data: IPost): Promise<IPost>;
}
