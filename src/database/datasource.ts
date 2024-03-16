import { join } from 'path';
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev_user',
  password: 'dev_pass',
  database: 'blog',
  entities: [__dirname + '/infra/entities/*.{js,ts}'],
  migrations: [join(__dirname, '../database/migrations/*{.ts,.js}')],
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: false,
  synchronize: false,
});
