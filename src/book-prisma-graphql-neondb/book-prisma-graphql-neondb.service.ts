/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaGraphqlNeonDbService } from 'src/prisma-graphql-neon-db/prisma-graphql-neon-db.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BookPrismaGraphqpNeondbService {
    constructor(private prisma: PrismaGraphqlNeonDbService){}

    create(data: CreateBookInput){
        return this.prisma.book.create({ data })
    }

    findAll(){
        return this.prisma.book.findMany();
    }

    findOne(id:string){
        return this.prisma.book.findUnique({ where: { id } });
    }

    update(data: UpdateBookInput){
        return this.prisma.book.update({ where: { id: data.id }, data: {title: data.title, author: data.author} }); 
    }

    remove( id: string){
        return this.prisma.book.delete({ where: { id } });
    }
}