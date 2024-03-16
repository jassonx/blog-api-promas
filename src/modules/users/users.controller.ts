import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IUserService } from '../../database/domain/services/IUser';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('IUserService')
    readonly userService: IUserService,
  ) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() body: any) {
    console.log('🚀 ~ UsersController ~ createUser ~ body:', body);
    return this.userService.createUser(body);
  }
}
