/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeeSupabasePostgreSqlController } from './employee-supabase-postgre-sql.controller';
import { EmployeeSupabasePostgreSqlService } from './employee-supabase-postgre-sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeSupabasePostgreSqlController],
  providers: [EmployeeSupabasePostgreSqlService]
})
export class EmployeeSupabasePostgreSqlModule {}
