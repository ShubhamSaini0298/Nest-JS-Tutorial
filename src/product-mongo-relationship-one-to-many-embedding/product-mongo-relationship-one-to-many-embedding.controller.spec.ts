import { Test, TestingModule } from '@nestjs/testing';
import { ProductMongoRelationshipOneToManyEmbeddingController } from './product-mongo-relationship-one-to-many-embedding.controller';

describe('ProductMongoRelationshipOneToManyEmbeddingController', () => {
  let controller: ProductMongoRelationshipOneToManyEmbeddingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductMongoRelationshipOneToManyEmbeddingController],
    }).compile();

    controller = module.get<ProductMongoRelationshipOneToManyEmbeddingController>(ProductMongoRelationshipOneToManyEmbeddingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
