import { Test, TestingModule } from '@nestjs/testing';
import { BookPrismaGraphqpNeondbService } from './book-prisma-graphql-neondb.service';

describe('BookPrismaGraphqpNeondbService', () => {
  let service: BookPrismaGraphqpNeondbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookPrismaGraphqpNeondbService],
    }).compile();

    service = module.get<BookPrismaGraphqpNeondbService>(BookPrismaGraphqpNeondbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
