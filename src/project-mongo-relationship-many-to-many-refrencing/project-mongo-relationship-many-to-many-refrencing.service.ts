/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './Schemas/project.schema';
import { Developer } from './Schemas/developer.schema';
import {Model } from "mongoose";

@Injectable()
export class ProjectMongoRelationshipManyToManyRefrencingService {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<Project>,
        @InjectModel(Developer.name) private developerModel: Model<Developer>
    ){}


    async seed(): Promise<{dev1 : Developer; dev2: Developer}> {
        const [projectA, projectB] = await Promise.all([
            this.projectModel.create({
                name: "Nest CRM"
            }),
            this.projectModel.create({
                name: "Mongo Analytics"
            })
        ]);

        const [dev1,dev2] = await Promise.all([
            this.developerModel.create({
            name: "Shubham Saini",
            projects: [projectA._id, projectB._id]
            }),
            this.developerModel.create({
                name: "Akhil",
                projects: [projectA._id]
            })
        ]);

        await Promise.all([
            this.projectModel.findByIdAndUpdate(projectA._id,{
                $set: { developers: [dev1._id, dev2._id] }
            }),
            this.projectModel.findByIdAndUpdate(projectA._id,{
                $set: { devlopers: [dev1._id]}
            })
        ]);
        return { dev1, dev2 };
    }

    async getDeveloper(): Promise<Developer[]>{
        return this.developerModel.find().populate('projects').lean();
    }

     async getProject(): Promise<Project[]>{
        return this.projectModel.find().populate('developers').lean();
    }
}
