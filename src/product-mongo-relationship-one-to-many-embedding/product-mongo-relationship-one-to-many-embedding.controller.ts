/* eslint-disable prettier/prettier */
import { Controller, Post, Get } from '@nestjs/common';
import { ProductMongoRelationshipOneToManyEmbeddingService } from './product-mongo-relationship-one-to-many-embedding.service';

@Controller('product-mongo-relationship-one-to-many-embedding')
export class ProductMongoRelationshipOneToManyEmbeddingController {
    constructor(private readonly productService: ProductMongoRelationshipOneToManyEmbeddingService){}

    @Post()
     create(){
            return this.productService.createProduct();
    }

    @Get()
    getAll(){
        return this.productService.getAllProducts();
    }
}
