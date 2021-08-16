/* istanbul ignore file */

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomErrorInterceptor } from './infraestructure/interceptors/error-handler/error-handler.interceptor';

async function bootstrap() {
    const port = process.env.PORT || 3000;

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    // app.setGlobalPrefix('api/v1');
    const config = new DocumentBuilder()
        .setTitle('DRC SKELETON API NESTJS')
        .setDescription('Skeleton API nest js')
        .setVersion('1.0')
        .addTag('DRC-nestjs-skeleton')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);

    app.useGlobalInterceptors(new CustomErrorInterceptor());
    await app.listen(port);
    console.info('APP LISTENING ON PORT: ' + port);
}
bootstrap();
