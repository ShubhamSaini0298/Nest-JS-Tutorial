/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserSupbasePostgreSqlController } from './user-supbase-postgre-sql.controller';
import { UserSupbasePostgreSqlService } from './user-supbase-postgre-sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserSupbasePostgreSqlController],
  providers: [UserSupbasePostgreSqlService]
})
export class UserSupbasePostgreSqlModule {}
