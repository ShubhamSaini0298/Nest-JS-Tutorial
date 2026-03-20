import { Test, TestingModule } from '@nestjs/testing';
import { UserSupbasePostgreSqlController } from './user-supbase-postgre-sql.controller';

describe('UserSupbasePostgreSqlController', () => {
  let controller: UserSupbasePostgreSqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSupbasePostgreSqlController],
    }).compile();

    controller = module.get<UserSupbasePostgreSqlController>(UserSupbasePostgreSqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
