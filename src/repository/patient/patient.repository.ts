import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Patient } from './entity/patient.entity';

@Injectable()
export class PatientRepository {
    private _patientRepository: Repository<Patient>;
    constructor(private connection: Connection) {
        this._patientRepository = this.connection.getRepository('pacientes');
    }

    async findOne(id: number): Promise<Patient> {
        return await this._patientRepository.findOne(id);
    }
}
