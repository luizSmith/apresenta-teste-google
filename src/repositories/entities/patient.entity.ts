import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pacientes')
class PatientEntity {
    @PrimaryGeneratedColumn()
    id_paciente: number

    @Column()
    nome: string;
}

export default PatientEntity;
