import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
    .setTitle('Students example')
    .setDescription('The students API description')
    .setExternalDoc('api-json', '/api-json')
    .setVersion('1.0')
    .addTag('students')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const appConfig = app.get<AppConfigService>('AppConfigService');
  await app.listen(appConfig.port);
}
bootstrap();
