import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post, User } from './infra';
import { PostRepository } from './repositories/post.repository';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  providers: [UserRepository, PostRepository],
  exports: [UserRepository, PostRepository],
})
export class DatabaseModule {}
