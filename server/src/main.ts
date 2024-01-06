import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from "@nestjs/platform-socket.io";
import {WsAdapter} from "@nestjs/platform-ws";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
