/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProjectMongoRelationshipManyToManyRefrencingController } from './project-mongo-relationship-many-to-many-refrencing.controller';
import { ProjectMongoRelationshipManyToManyRefrencingService } from './project-mongo-relationship-many-to-many-refrencing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './Schemas/project.schema';
import { Developer, DeveloperSchema } from './Schemas/developer.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Project.name, schema: ProjectSchema},
    {name: Developer.name, schema: DeveloperSchema}
  ])],
  controllers: [ProjectMongoRelationshipManyToManyRefrencingController],
  providers: [ProjectMongoRelationshipManyToManyRefrencingService]
})
export class ProjectMongoRelationshipManyToManyRefrencingModule {}
