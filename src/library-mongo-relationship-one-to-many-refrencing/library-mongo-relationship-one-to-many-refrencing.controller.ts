/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { LibraryMongoRelationshipOneToManyRefrencingService } from './library-mongo-relationship-one-to-many-refrencing.service';

@Controller('library-mongo-relationship-one-to-many-refrencing')
export class LibraryMongoRelationshipOneToManyRefrencingController {
    constructor(private readonly libraryService: LibraryMongoRelationshipOneToManyRefrencingService){}

    @Post()
    createLibrary(){
        return this.libraryService.createLibrary();
    }

    @Get()
    getLibraries(){
        return this.libraryService.getLibraries();
    }
}
