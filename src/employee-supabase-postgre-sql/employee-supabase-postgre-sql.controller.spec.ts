import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeSupabasePostgreSqlController } from './employee-supabase-postgre-sql.controller';

describe('EmployeeSupabasePostgreSqlController', () => {
  let controller: EmployeeSupabasePostgreSqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeSupabasePostgreSqlController],
    }).compile();

    controller = module.get<EmployeeSupabasePostgreSqlController>(EmployeeSupabasePostgreSqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
