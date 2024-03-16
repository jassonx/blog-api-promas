import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPost } from '../domain/entities/IPost';
import { IPostRepository } from '../domain/repositories/IPost';
import { Post } from '../infra';

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
  ) {}

  create(data: any): Promise<IPost> {
    console.log('🚀 ~ UserRepository ~ create ~ data:', data);
    this.repository.create(data);
    return null;
  }

  findAll(): Promise<any> {
    console.log('🚀 ~ UserRepository ~ FindAll');
    return this.repository.find();
  }

  filter(data: any): Promise<Post[]> {
    return null; //this.repository.findOneBy(data);
  }
}
