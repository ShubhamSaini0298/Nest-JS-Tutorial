import { Test, TestingModule } from '@nestjs/testing';
import { PrismaGraphqlNeonDbService } from './prisma-graphql-neon-db.service';

describe('PrismaGraphqlNeonDbService', () => {
  let service: PrismaGraphqlNeonDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaGraphqlNeonDbService],
    }).compile();

    service = module.get<PrismaGraphqlNeonDbService>(PrismaGraphqlNeonDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
