import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [], // Importa el módulo que exporta IUserRepository
  controllers: [UsersController],
  providers: [
    {
      provide: 'IUserService',
      useClass: UsersService,
    },
    // {
    //   provide: 'IUserRepository',
    //   useClass: UserRepository,
    // },
    // UsersService, // Agrega UsersService directamente como un proveedor
  ],
})
export class UsersModule {}
