/* eslint-disable prettier/prettier */
import {InputType, Field} from '@nestjs/graphql';

@InputType()
export class CreateBookInput{
    @Field()
    title: string;

    @Field()
    author: string;
}