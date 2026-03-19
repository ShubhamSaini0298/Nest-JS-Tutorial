import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document } from "mongoose";

export type StudentDocument = Student & Document;

@Schema({timestamps: true})
export class Student {
    @Prop({isRequired: true})
    name: string;

    @Prop({isRequired: true})
    age: number;

    @Prop()
    email?: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);