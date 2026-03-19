import { Test, TestingModule } from '@nestjs/testing';
import { LibraryMongoRelationshipOneToManyRefrencingService } from './library-mongo-relationship-one-to-many-refrencing.service';

describe('LibraryMongoRelationshipOneToManyRefrencingService', () => {
  let service: LibraryMongoRelationshipOneToManyRefrencingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryMongoRelationshipOneToManyRefrencingService],
    }).compile();

    service = module.get<LibraryMongoRelationshipOneToManyRefrencingService>(LibraryMongoRelationshipOneToManyRefrencingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
