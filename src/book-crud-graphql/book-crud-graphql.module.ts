/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Module } from '@nestjs/common';

import { BookCrudGraphqlService } from './book-crud-graphql.service';
import { BookResolver } from './resolvers/book.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './model/book.model';

@Module({
  imports:[MongooseModule.forFeature([
      {name: Book.name, schema: BookSchema}
    ])
  ],
  providers: [BookCrudGraphqlService, BookResolver]
})
export class BookCrudGraphqlModule {}
