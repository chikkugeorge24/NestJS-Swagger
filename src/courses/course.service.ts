import { Injectable } from "@nestjs/common";

@Injectable()
export class CourseService {
    display = async(): Promise<any> => {
        return 'Course Details are fetched.'
    }
}