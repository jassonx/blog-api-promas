import { Injectable } from '@nestjs/common';
import type { IUser } from '../../database/domain/entities/IUser';
import type { IUserService } from '../../database/domain/services/IUser';
import { UserRepository } from '../../database/repositories/user.repository';

@Injectable()
export class UsersService implements IUserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(name: string) {
    return await this.userRepository.findByName(name);
  }

  async getUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(userId: string) {
    return await this.userRepository.findById(userId);
  }

  async createUser(user: any): Promise<IUser> {
    return await this.userRepository.create(user);
  }
}
