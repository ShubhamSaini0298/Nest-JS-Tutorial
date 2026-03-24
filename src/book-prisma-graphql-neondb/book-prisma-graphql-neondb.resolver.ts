/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { Book } from './model/book.model';
import { BookPrismaGraphqpNeondbService } from './book-prisma-graphql-neondb.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(()=> Book)
export class BookPrismaGraphqpNeondbResolver {
    constructor(private readonly bookService: BookPrismaGraphqpNeondbService){}


    @Query(() => [Book])
    getAllBooks(){
        return this.bookService.findAll();
    }

    @Query(() => Book)
    getBook(@Args('id') id:string){
        return this.bookService.findOne(id);
    }

    @Mutation(() => Book)
    createBook(@Args('input') input: CreateBookInput){
        return this.bookService.create(input);
    }

    @Mutation(() => Book)
    updateBook(@Args('input') input: UpdateBookInput){
        return this.bookService.update(input);
    }

    @Mutation(()=> Book)
    deleteBook(@Args('id') id:string){
        return this.bookService.remove(id);
    }   
}
