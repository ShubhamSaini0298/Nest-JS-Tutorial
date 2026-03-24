/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookPrismaGraphqpNeondbService } from './book-prisma-graphql-neondb.service';
import { BookPrismaGraphqpNeondbResolver } from './book-prisma-graphql-neondb.resolver';
import { PrismaGraphqlNeonDbModule } from 'src/prisma-graphql-neon-db/prisma-graphql-neon-db.module';

@Module({
  imports: [PrismaGraphqlNeonDbModule],
  providers: [BookPrismaGraphqpNeondbService, BookPrismaGraphqpNeondbResolver]
})
export class BookPrismaGraphqpNeondbModule {}
