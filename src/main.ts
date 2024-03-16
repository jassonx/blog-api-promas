import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');
  app.enableCors();
  await app.listen(port, () => {
    console.log('[WEB]', 'Localhost');
  });
}
bootstrap();
