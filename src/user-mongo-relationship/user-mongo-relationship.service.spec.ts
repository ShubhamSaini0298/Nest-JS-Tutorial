import { Test, TestingModule } from '@nestjs/testing';
import { UserMongoRelationshipService } from './user-mongo-relationship.service';

describe('UserMongoRelationshipService', () => {
  let service: UserMongoRelationshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMongoRelationshipService],
    }).compile();

    service = module.get<UserMongoRelationshipService>(UserMongoRelationshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
