import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pacientes') // El nombre de la tabla en la base de datos
export class Paciente {
    @PrimaryGeneratedColumn() // El ID será autoincrementado
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    dni: string;

    @Column()
    direccion: string;

    @Column()
    tipo: string;
}