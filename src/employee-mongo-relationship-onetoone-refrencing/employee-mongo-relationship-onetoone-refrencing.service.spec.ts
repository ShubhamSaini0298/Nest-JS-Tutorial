import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeMongoRelationshipOnetooneRefrencingService } from './employee-mongo-relationship-onetoone-refrencing.service';

describe('EmployeeMongoRelationshipOnetooneRefrencingService', () => {
  let service: EmployeeMongoRelationshipOnetooneRefrencingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeMongoRelationshipOnetooneRefrencingService],
    }).compile();

    service = module.get<EmployeeMongoRelationshipOnetooneRefrencingService>(EmployeeMongoRelationshipOnetooneRefrencingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
