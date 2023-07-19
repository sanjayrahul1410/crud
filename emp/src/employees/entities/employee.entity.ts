import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'employees' })
export class Employee{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    designation: string;

    @Column()
    department:string;

    @Column()
    address:string;

    @Column()
    salary:number;
}
