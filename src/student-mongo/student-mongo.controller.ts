/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentMongoService } from './student-mongo.service';
import { Student } from './student.schema';

@Controller('student-mongo')
export class StudentMongoController {
  constructor(private readonly studentMongoService: StudentMongoService) {}

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentMongoService.createStudent(data);
  }

  @Get()
  async getStudents() {
    return this.studentMongoService.getAllStudents();
  }

  @Get(':id')
  async getStudent(@Param('id') id: string) {
    return this.studentMongoService.getStudentById(id);
  }

  @Put(':id')
  async updateStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentMongoService.updateStudent(id, data);
  }

  @Patch(':id')
  async patchStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentMongoService.pathStudent(id, data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string){
    return this.studentMongoService.deleteStudent(id);
  }

}
