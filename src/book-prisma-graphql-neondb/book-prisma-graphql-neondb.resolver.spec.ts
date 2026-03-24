import { Test, TestingModule } from '@nestjs/testing';
import { BookPrismaGraphqpNeondbResolver } from './book-prisma-graphql-neondb.resolver';

describe('BookPrismaGraphqpNeondbResolver', () => {
  let resolver: BookPrismaGraphqpNeondbResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookPrismaGraphqpNeondbResolver],
    }).compile();

    resolver = module.get<BookPrismaGraphqpNeondbResolver>(BookPrismaGraphqpNeondbResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
