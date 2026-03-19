/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeMongoRelationshipOnetooneRefrencingController } from './employee-mongo-relationship-onetoone-refrencing.controller';

describe('EmployeeMongoRelationshipOnetooneRefrencingController', () => {
  let controller: EmployeeMongoRelationshipOnetooneRefrencingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeMongoRelationshipOnetooneRefrencingController],
    }).compile();

    controller = module.get<EmployeeMongoRelationshipOnetooneRefrencingController>(EmployeeMongoRelationshipOnetooneRefrencingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
