import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // it will help us to validate input data with DTOs
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      // this will throw error if it finds any property that is not in the whitelist
      forbidNonWhitelisted: true,

      // this will transfor the payload to dto automatically globally
      transform: true
    }
  ))
  await app.listen(3000);
}
bootstrap();

/**
 * Validation pipe has many other great features
 * We can filter properties that should not be received by our method handler via whitelisting
 * By specifying whiltelisted properties any properties not included whithin the list will be striped out of the resulting object
 * We can also stop our request to process if any unwanted property is found!
 * validation pipe also tries to convert primitive type to the type required if it is possible!
 */