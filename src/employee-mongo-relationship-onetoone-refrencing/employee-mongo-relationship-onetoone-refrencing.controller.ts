/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeMongoRelationshipOnetooneRefrencingService } from './employee-mongo-relationship-onetoone-refrencing.service';

@Controller('employee-mongo-relationship-onetoone-refrencing')
export class EmployeeMongoRelationshipOnetooneRefrencingController {
    constructor(private readonly employeeService: EmployeeMongoRelationshipOnetooneRefrencingService){}

    @Post()
    create(){
        return this.employeeService.createEmployee();
    }

    @Get()
    find(){
        return this.employeeService.findAll();
    }
}
