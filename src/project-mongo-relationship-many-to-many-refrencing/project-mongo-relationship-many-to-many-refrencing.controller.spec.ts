import { Test, TestingModule } from '@nestjs/testing';
import { ProjectMongoRelationshipManyToManyRefrencingController } from './project-mongo-relationship-many-to-many-refrencing.controller';

describe('ProjectMongoRelationshipManyToManyRefrencingController', () => {
  let controller: ProjectMongoRelationshipManyToManyRefrencingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectMongoRelationshipManyToManyRefrencingController],
    }).compile();

    controller = module.get<ProjectMongoRelationshipManyToManyRefrencingController>(ProjectMongoRelationshipManyToManyRefrencingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
