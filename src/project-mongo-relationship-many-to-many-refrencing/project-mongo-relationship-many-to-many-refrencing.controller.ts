/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { ProjectMongoRelationshipManyToManyRefrencingService } from './project-mongo-relationship-many-to-many-refrencing.service';

@Controller('project-mongo-relationship-many-to-many-refrencing')
export class ProjectMongoRelationshipManyToManyRefrencingController {
    constructor(private readonly projectService: ProjectMongoRelationshipManyToManyRefrencingService) {}

    @Post('seed')
    seedData(){
        return this.projectService.seed();
    }

    @Get('developers')
    getDevelopers(){
        return this.projectService.getDeveloper();
    }

    @Get('projects')
    getProjects(){
        return this.projectService.getProject();
    }       
}
