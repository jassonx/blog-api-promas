import type { PostFilterRquest } from 'src/modules/posts/domain/dto/Requests';
import type { IPost } from '../entities/IPost';

export interface IPostRepository {
  create(data: IPost): Promise<IPost>;
  findAll(): Promise<IPost[]>;
  filterBy(data: PostFilterRquest): Promise<IPost[]>;
}
