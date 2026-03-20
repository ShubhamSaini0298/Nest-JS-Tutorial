import { Test, TestingModule } from '@nestjs/testing';
import { ProjectMongoRelationshipManyToManyRefrencingService } from './project-mongo-relationship-many-to-many-refrencing.service';

describe('ProjectMongoRelationshipManyToManyRefrencingService', () => {
  let service: ProjectMongoRelationshipManyToManyRefrencingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectMongoRelationshipManyToManyRefrencingService],
    }).compile();

    service = module.get<ProjectMongoRelationshipManyToManyRefrencingService>(ProjectMongoRelationshipManyToManyRefrencingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
