import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pacientes')
export class Patient {
    @PrimaryGeneratedColumn()
    id_paciente: number;

    @Column()
    nome: string;
}
