import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle("Course API Template")
  .setDescription("Course API Template Example")
  .setVersion("1.0")
  .addTag('Course')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api",app,document)
  await app.listen(3000);
}
bootstrap();
