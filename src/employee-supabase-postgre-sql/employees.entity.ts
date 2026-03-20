/* eslint-disable prettier/prettier */
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Employee{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    position: string;

    @Column()
    department: string;
}