import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [
    {
      provide: 'IPostService',
      useClass: PostsService,
    },
  ],
})
export class PostsModule {}
