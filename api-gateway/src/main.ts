import { NestFactory } from '@nestjs/core';
import { WebModule } from './web/WebModule';
import { ConfigService } from '@nestjs/config';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(WebModule);
  app.use(json());
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
