/* eslint-disable prettier/prettier */
import {InputType, Field} from "@nestjs/graphql";
import{IsNotEmpty, IsString, IsOptional} from "class-validator";

@InputType()
export class CreateBookInput{
    @Field()
    @IsNotEmpty()
    @IsString()
    title:string;

    @Field({nullable: true})
    @IsOptional()
    @IsString()
    description?:string;

    @Field()
    @IsString()
    @IsNotEmpty()
     author: string;
}