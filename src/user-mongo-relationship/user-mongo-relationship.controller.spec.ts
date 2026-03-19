import { Test, TestingModule } from '@nestjs/testing';
import { UserMongoRelationshipController } from './user-mongo-relationship.controller';

describe('UserMongoRelationshipController', () => {
  let controller: UserMongoRelationshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMongoRelationshipController],
    }).compile();

    controller = module.get<UserMongoRelationshipController>(UserMongoRelationshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
