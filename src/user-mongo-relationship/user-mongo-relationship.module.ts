/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserMongoRelationshipService } from './user-mongo-relationship.service';
import { UserMongoRelationshipController } from './user-mongo-relationship.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Schemas/user.schema';

@Module({
  imports : [MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema
  }])],
  providers: [UserMongoRelationshipService],
  controllers: [UserMongoRelationshipController]
})
export class UserMongoRelationshipModule {}
