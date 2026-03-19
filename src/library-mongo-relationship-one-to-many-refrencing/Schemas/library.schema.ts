/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, Schema as MongooseSchema}  from "mongoose";

@Schema()
export class Library extends Document{
    @Prop()
    name:string;

    @Prop({type:[{type: MongooseSchema.Types.ObjectId, ref:'Book'}]})
    books: MongooseSchema.Types.ObjectId[];
}

export const LibrarySchema = SchemaFactory.createForClass(Library);