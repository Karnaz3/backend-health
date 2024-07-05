import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ValidationException } from './application/decorators/exceptions/validation.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*',
  });

  //  validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        // console.log(errors);
        return new ValidationException(errors);
      },
    }),
  );

  await app.listen(port, () => {
    Logger.log(`Server running on port ${port}`, 'Bootstrap');
  });
}

bootstrap();
