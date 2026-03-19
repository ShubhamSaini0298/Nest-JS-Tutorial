/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './Schemas/library.schema';
import { Book } from './Schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class LibraryMongoRelationshipOneToManyRefrencingService {
    constructor(@InjectModel(Library.name) private libraryModel: Model<Library>,
                @InjectModel(Book.name) private bookModel: Model<Book>){}

                async createLibrary(): Promise<Library>{
                    const book1 = await this.bookModel.create({
                        title: "Book1",
                        author: "Shubham"
                    })

                    const book2 = await this.bookModel.create({
                        title: "Book2",
                        author: "Nitesh"
                    })

                    const library = new this.libraryModel({
                        name: "Central Library",
                        books: [book1._id, book2._id]
                    })

                    return library.save();
                }

                async getLibraries(): Promise<Library[]>{
                    return this.libraryModel.find().populate('books');
                }
}
