/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './Schemas/user.schema';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class UserMongoRelationshipService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async createUser() : Promise<User>{
        const user = new this.userModel({
            name: "Akhil",
            address:{
                street: "123 Main St",
                city: "New York"
            }
        })
        return user.save();
    }

    async findAll() : Promise<User[]>{
        return this.userModel.find();
    }
}
