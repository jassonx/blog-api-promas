import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import type { IUserService } from '../../database/domain/services/IUser';

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
    return this.userService.createUser(body);
  }

  @Post('/login')
  async login(@Body() body: any) {
    return this.userService.login(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
