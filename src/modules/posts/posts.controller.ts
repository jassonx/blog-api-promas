import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import type { IPostService } from '../../database/domain/services/IPost';
import type { PostFilterRquest } from './domain/dto/Requests';

@Controller('posts')
export class PostsController {
  constructor(
    @Inject('IPostService')
    readonly postService: IPostService,
  ) {}

  @Get()
  async filterPost(@Query() query: PostFilterRquest) {
    console.log('🚀 ~ PostsController ~ filterPost ~ request:', query);
    return this.postService.filter(query);
  }

  @Post()
  async createUser(@Body() body: any) {
    return this.postService.createPost(body);
  }
}
