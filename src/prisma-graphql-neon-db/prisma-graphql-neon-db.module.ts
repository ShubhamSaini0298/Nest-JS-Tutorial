/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaGraphqlNeonDbService } from './prisma-graphql-neon-db.service';

@Module({
  providers: [PrismaGraphqlNeonDbService],
  exports: [PrismaGraphqlNeonDbService]
})
export class PrismaGraphqlNeonDbModule {}
