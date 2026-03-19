/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { UserMongoRelationshipService } from './user-mongo-relationship.service';

@Controller('user-mongo-relationship')
export class UserMongoRelationshipController {
    constructor(private readonly userMongoRelationshipService: UserMongoRelationshipService){}

    @Post()
    create(){
        return this.userMongoRelationshipService.createUser();
    }

    @Get()
    getAll(){
        return this.userMongoRelationshipService.findAll();
    }
}
