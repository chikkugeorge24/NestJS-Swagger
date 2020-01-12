import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CourseService } from "./course.service";

@Controller('Course')
@ApiTags('Course')
export class CourseController {
    constructor(
        private readonly courseService: CourseService
    ) {}

    @Get('course-details')
    public async display() {
       return await this.courseService.display();
    }
}