import { Test, TestingModule } from '@nestjs/testing';
import { LibraryMongoRelationshipOneToManyRefrencingController } from './library-mongo-relationship-one-to-many-refrencing.controller';

describe('LibraryMongoRelationshipOneToManyRefrencingController', () => {
  let controller: LibraryMongoRelationshipOneToManyRefrencingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibraryMongoRelationshipOneToManyRefrencingController],
    }).compile();

    controller = module.get<LibraryMongoRelationshipOneToManyRefrencingController>(LibraryMongoRelationshipOneToManyRefrencingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
