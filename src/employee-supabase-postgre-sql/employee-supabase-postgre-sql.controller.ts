/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeeSupabasePostgreSqlService } from './employee-supabase-postgre-sql.service';
import { Employee } from './employees.entity';

@Controller('employee-supabase-postgre-sql')
export class EmployeeSupabasePostgreSqlController {
    constructor(private readonly employeeService: EmployeeSupabasePostgreSqlService){}

    @Post()
    async createEmployee(@Body() body: Partial<Employee>) : Promise<Employee>{
        return this.employeeService.create(body); 
    }

    @Get()
    async findAll(): Promise<Employee[]>{
        return this.employeeService.findAll();
    }

     @Get(':id')
    async findOne(@Param('id') id: number): Promise<Employee>{
        return this.employeeService.findOne(id);
    }
}
