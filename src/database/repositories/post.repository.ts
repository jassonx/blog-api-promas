import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostFilterRquest } from 'src/modules/posts/domain/dto/Requests';
import { Brackets, Repository } from 'typeorm';
import type { IPost } from '../domain/entities/IPost';
import type { IPostRepository } from '../domain/repositories/IPost';
import { Post } from '../infra';

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
  ) {}

  create(data: any): Promise<IPost> {
    this.repository.save(data);
    return data;
  }

  findAll(): Promise<IPost[]> {
    return this.repository.find({
      relations: ['user'],
      order: {
        id: 'DESC',
      },
    });
  }

  async filterBy(conditions: PostFilterRquest): Promise<Post[]> {
    console.log('🚀 ~ PostRepository ~ filter ~ conditions:', conditions);
    const qb = this.repository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user')
      .select([
        'post.id',
        'post.title',
        'post.content',
        'post.createdAt',
        'user.id',
        'user.name',
        'user.role',
      ]);

    if (conditions?.userId)
      qb.where('post.userId = :userId', { userId: conditions.userId });

    if (conditions?.title) {
      qb.andWhere(
        new Brackets((subQb) => {
          subQb.where('post.title ILIKE :title', {
            title: `%${conditions.title}%`,
          });
        }),
      );
    }

    if (conditions?.content) {
      qb.andWhere(
        new Brackets((subQb) => {
          subQb.where('post.content ILIKE :content', {
            content: `%${conditions.content}%`,
          });
        }),
      );
    }

    return await qb.getMany();
  }
}
