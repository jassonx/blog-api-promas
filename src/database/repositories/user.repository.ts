import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { IUser } from '../domain/entities/IUser';
import type { IUserRepository } from '../domain/repositories/IUser';
import { User } from '../infra';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findAll(): Promise<any> {
    return this.repository.find();
  }

  findById(id: number): Promise<IUser> {
    return this.repository.findOneBy({ id });
  }

  login(data: any): Promise<IUser> {
    return this.repository.findOne({ where: data });
  }

  create(data: any): Promise<IUser> {
    this.repository.save(data);
    return data;
  }

  async delete(id: number): Promise<any> {
    const del = await this.repository.delete({ id });
    if (del.affected <= 0) throw new BadRequestException('No se pudo elimnar');
    return 'succes';
  }
}
