import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './infra';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DatabaseModule {}
