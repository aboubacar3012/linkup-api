import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // ############### Swagger ################
  const config = new DocumentBuilder()
    .setTitle('Linkup API')
    .setDescription(
      'Linkup est une application de mise en relation des entrepreneurs ou professionnels de la tech',
    )
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // ############### End Swagger ################

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
