import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeSupabasePostgreSqlService } from './employee-supabase-postgre-sql.service';

describe('EmployeeSupabasePostgreSqlService', () => {
  let service: EmployeeSupabasePostgreSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeSupabasePostgreSqlService],
    }).compile();

    service = module.get<EmployeeSupabasePostgreSqlService>(EmployeeSupabasePostgreSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
