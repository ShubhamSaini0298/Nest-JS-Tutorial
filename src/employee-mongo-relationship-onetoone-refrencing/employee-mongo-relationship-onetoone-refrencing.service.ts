/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './Schemas/employee.schema';
import { Profile } from './Schemas/profile.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeMongoRelationshipOnetooneRefrencingService {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<Employee>,
                @InjectModel(Profile.name) private profileModel: Model<Profile>
                ){}

    async createEmployee(): Promise<Employee>{
        const profile = await new this.profileModel({
            age: 20,
            qualification: "Masters"
        }).save();

        const employee = await new this.employeeModel({
            name: "Akhil",
            profile: profile._id
        })

        return employee.save();
    }

    async findAll(): Promise<Employee[]>{
        return this.employeeModel.find().populate('profile').exec();
    }
}
