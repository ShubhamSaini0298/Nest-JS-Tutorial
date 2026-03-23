/* eslint-disable prettier/prettier */
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ObjectType, Field,ID} from '@nestjs/graphql';
import { Types } from 'mongoose';

@Schema()
@ObjectType()
export class Book extends Document{
  @Field(() => ID)
    declare readonly _id: Types.ObjectId;

    @Prop({required: true})
    @Field()
    title:string;

    @Prop()
    @Field({nullable: true})
    description?:string;

    @Prop({required:true})
    @Field()
    author:string;
}

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
export const BookSchema = SchemaFactory.createForClass(Book) as any;
