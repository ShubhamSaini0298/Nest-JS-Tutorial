import { Test, TestingModule } from '@nestjs/testing';
import { BookCrudGraphqlService } from './book-crud-graphql.service';

describe('BookCrudGraphqlService', () => {
  let service: BookCrudGraphqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookCrudGraphqlService],
    }).compile();

    service = module.get<BookCrudGraphqlService>(BookCrudGraphqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
