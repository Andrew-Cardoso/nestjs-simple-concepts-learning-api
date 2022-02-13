import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

(async () => {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3210);
})();
