import { Injectable } from '@nestjs/common';
import type { IUser } from 'src/database/domain/entities/IUser';
import type { IUserService } from '../../database/domain/services/IUser';
import { UserRepository } from '../../database/repositories/user.repository';

@Injectable()
export class UsersService implements IUserService {
  constructor(private userRepository: UserRepository) {}

  login(data: any) {
    return this.userRepository.login(data);
  }

  getUsers() {
    return this.userRepository.findAll();
  }

  getUserById(userId: number) {
    return this.userRepository.findById(userId);
  }

  createUser(user: any): Promise<IUser> {
    return this.userRepository.create(user);
  }

  deleteUser(user: any): Promise<any> {
    return this.userRepository.delete(user);
  }
}
