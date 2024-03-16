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

  create(data: IUser): Promise<any> {
    return null; //this.repository.create({ ...data });
  }

  findAll(): Promise<any> {
    return this.repository.find();
  }

  findById(id: string): Promise<any> {
    return this.repository.findOneBy({ id });
  }

  findByName(name: string): Promise<any> {
    return this.repository.findOneBy({ name });
  }
}
