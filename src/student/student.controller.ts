/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body,Put, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentservice : StudentService){}

    @Get()
    getAll(){
        return this.studentservice.getAllStudents();
    }

    @Get(':id')
    getOne(@Param('id') id:string){
        return this.studentservice.getStudentById(Number(id));
    }

    @Post()
    create(@Body() body: {name:string; age:number}){
        return this.studentservice.createStudent(body);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() body: {name:string; age:number}){
        return this.studentservice.updateStudent(Number(id), body)
    }

    @Patch(':id')
    patch(@Param('id') id:string, @Body() body: Partial<{name:string; age:number}>){
        return this.studentservice.patchStudent(Number(id), body)
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.studentservice.deleteStudent(Number(id));
    }
}
