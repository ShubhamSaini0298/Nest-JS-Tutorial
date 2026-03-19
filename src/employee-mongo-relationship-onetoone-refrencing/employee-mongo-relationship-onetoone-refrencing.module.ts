/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeeMongoRelationshipOnetooneRefrencingController } from './employee-mongo-relationship-onetoone-refrencing.controller';
import { EmployeeMongoRelationshipOnetooneRefrencingService } from './employee-mongo-relationship-onetoone-refrencing.service';
import { Employee, EmployeeSchema } from './Schemas/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './Schemas/profile.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employee.name, schema: EmployeeSchema},
    {name: Profile.name, schema:ProfileSchema} 
  ])],
  controllers: [EmployeeMongoRelationshipOnetooneRefrencingController],
  providers: [EmployeeMongoRelationshipOnetooneRefrencingService]
})
export class EmployeeMongoRelationshipOnetooneRefrencingModule {}
