/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LibraryMongoRelationshipOneToManyRefrencingController } from './library-mongo-relationship-one-to-many-refrencing.controller';
import { LibraryMongoRelationshipOneToManyRefrencingService } from './library-mongo-relationship-one-to-many-refrencing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './Schemas/library.schema';
import { Book, BookSchema } from './Schemas/book.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Library.name, schema: LibrarySchema}, 
    {name: Book.name, schema: BookSchema}
  ])],
  controllers: [LibraryMongoRelationshipOneToManyRefrencingController],
  providers: [LibraryMongoRelationshipOneToManyRefrencingService]
})
export class LibraryMongoRelationshipOneToManyRefrencingModule {}
