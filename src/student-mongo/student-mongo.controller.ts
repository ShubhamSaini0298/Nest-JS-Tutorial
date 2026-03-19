import { Body, Controller, Post } from '@nestjs/common';
import { StudentMongoService } from './student-mongo.service';
import { Student } from './student.schema';

@Controller('student-mongo')
export class StudentMongoController {
    constructor(private readonly studentMongoService: StudentMongoService){}

    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentMongoService.createStudent(data);
    }
}
