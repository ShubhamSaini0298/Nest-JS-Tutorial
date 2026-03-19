/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductMongoRelationshipOneToManyEmbeddingService } from './product-mongo-relationship-one-to-many-embedding.service';
import { ProductMongoRelationshipOneToManyEmbeddingController } from './product-mongo-relationship-one-to-many-embedding.controller';
import { Product, ProductSchema } from './Schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{
    name: Product.name,
    schema: ProductSchema
  }])],
  providers: [ProductMongoRelationshipOneToManyEmbeddingService],
  controllers: [ProductMongoRelationshipOneToManyEmbeddingController]
})
export class ProductMongoRelationshipOneToManyEmbeddingModule {}
