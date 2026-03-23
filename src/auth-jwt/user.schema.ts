/* eslint-disable prettier/prettier */
import{Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = UserJWT & Document;

@Schema()
export class UserJWT {
    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    password: string;
}

export const userSchema = SchemaFactory.createForClass(UserJWT);
