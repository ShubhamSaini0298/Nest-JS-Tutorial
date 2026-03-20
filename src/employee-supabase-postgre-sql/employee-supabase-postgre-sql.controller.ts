/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeSupabasePostgreSqlService } from './employee-supabase-postgre-sql.service';
import { Employee } from './employees.entity';

@Controller('employee-supabase-postgre-sql')
export class EmployeeSupabasePostgreSqlController {
    constructor(private readonly employeeService: EmployeeSupabasePostgreSqlService){}

    @Post()
    async createEmployee(@Body() body: Partial<Employee>) : Promise<Employee>{
        return this.employeeService.create(body); 
    }
}
