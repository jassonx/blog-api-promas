import { Injectable } from '@nestjs/common';
import type { IPost } from '../../database/domain/entities/IPost';
import type { IPostService } from '../../database/domain/services/IPost';
import { PostRepository } from '../../database/repositories/post.repository';
import type { PostFilterRquest } from './domain/dto/Requests';

@Injectable()
export class PostsService implements IPostService {
  constructor(private postRepository: PostRepository) {}

  filter(conditions: PostFilterRquest) {
    return this.postRepository.filterBy(conditions);
  }

  getPosts() {
    return this.postRepository.findAll();
  }

  createPost(data: any): Promise<IPost> {
    return this.postRepository.create(data);
  }
}
