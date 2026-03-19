import { Test, TestingModule } from '@nestjs/testing';
import { ProductMongoRelationshipOneToManyEmbeddingService } from './product-mongo-relationship-one-to-many-embedding.service';

describe('ProductMongoRelationshipOneToManyEmbeddingService', () => {
  let service: ProductMongoRelationshipOneToManyEmbeddingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductMongoRelationshipOneToManyEmbeddingService],
    }).compile();

    service = module.get<ProductMongoRelationshipOneToManyEmbeddingService>(ProductMongoRelationshipOneToManyEmbeddingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
