import { Test, TestingModule } from '@nestjs/testing';
import { UserSupbasePostgreSqlService } from './user-supbase-postgre-sql.service';

describe('UserSupbasePostgreSqlService', () => {
  let service: UserSupbasePostgreSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSupbasePostgreSqlService],
    }).compile();

    service = module.get<UserSupbasePostgreSqlService>(UserSupbasePostgreSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
