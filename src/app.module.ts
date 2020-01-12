import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './courses/course.controller';
import { CourseService } from './courses/course.service';

@Module({
  imports: [],
  controllers: [CourseController],
  providers: [CourseService]
})
export class AppModule {}
