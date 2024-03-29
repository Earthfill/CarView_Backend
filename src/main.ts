import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // DOING THIS IN THE APP MODULE FOR TESTING PURPOSES
  // app.use(
  //   cookieSession({
  //     keys: ['adfghjkl'],
  //   }),
  // );
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
