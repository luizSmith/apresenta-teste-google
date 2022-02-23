import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pacientes')
export class Patient extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_paciente: number;

    @Column()
    nome: string;
}
