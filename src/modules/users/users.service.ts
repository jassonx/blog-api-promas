import { Injectable } from '@nestjs/common';
import { IUser } from 'src/database/domain/entities/IUser';
import type { IUserService } from '../../database/domain/services/IUser';
import { UserRepository } from '../../database/repositories/user.repository';

@Injectable()
export class UsersService implements IUserService {
  constructor(private userRepository: UserRepository) {}

  getUser(name: string) {
    return this.userRepository.findByName(name);
  }

  getUsers() {
    console.log('🚀 ~ UsersController ~ USER SRVIDE GETALL');
    return this.userRepository.findAll();
  }

  getUserById(userId: string) {
    return this.userRepository.findById(userId);
  }

  createUser(user: any): Promise<IUser> {
    console.log('🚀 ~ UsersService ~ createUser ~ user:', user);
    return this.userRepository.create(user);
  }
}
