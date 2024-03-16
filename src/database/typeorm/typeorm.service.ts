import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    console.log('🚀 ~ useFactory: ~ __dirname:', __dirname);
    return {
      name: 'default',
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,

      entities: [__dirname + '../infra/entities/*.entity.{js,ts}'],
      // entities: ['dist/modules/*/entities/*.entity.js'],
      migrations: [__dirname + '../migrations/*{.ts,.js}'],
      // migrations: ['dist/database/migrations/*.js'],

      // cli: {
      //   migrationsDir: __dirname + '/../database/migrations',
      // },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: false,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  name: 'default',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [__dirname + '../infra/entities/*.entity.{js,ts}'],
  migrations: [__dirname + '../migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },

  // entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  // migrations: [__dirname + '/../../database/migrations/*{.ts,.js}'],
  // // entities: ['dist/modules/*/entities/*.entity.js'],
  // migrations: ['dist/database/migrations/*.js'],
  // cli: {
  //   migrationsDir: __dirname + '/../../database/migrations',
  // },
};
