import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from '../domain/entities/IUser';
import { IUserRepository } from '../domain/repositories/IUser';
import { User } from '../infra';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findAll(): Promise<any> {
    console.log('🚀 ~ UserRepository ~ FindAll');
    return this.repository.find();
  }

  findById(id: string): Promise<IUser> {
    return this.repository.findOneBy({ id });
  }

  findByName(name: string): Promise<IUser> {
    return this.repository.findOneBy({ name });
  }

  create(data: any): Promise<IUser> {
    console.log('🚀 ~ UserRepository ~ create ~ data:', data);
    this.repository.create(data);
    return null;
  }
}
