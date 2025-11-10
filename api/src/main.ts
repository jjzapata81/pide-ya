import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.enableCors();
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Products and Orders API')
    .setDescription('API REST para gestión de productos y órdenes')
    .setVersion('1.0')
    .addTag('products', 'Operaciones relacionadas con productos')
    .addTag('orders', 'Operaciones relacionadas con órdenes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
  console.log(
    'Swagger documentation is available on: http://localhost:3000/api/docs',
  );
}
bootstrap();
