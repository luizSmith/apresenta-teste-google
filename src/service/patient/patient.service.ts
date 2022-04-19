import { HttpException, Injectable } from '@nestjs/common';
import { PatientRepository } from 'src/repository/patient/patient.repository';
import { FindPatientDto } from './dto/FindPatient.dto';

@Injectable()
export class PatientService {
    constructor(private readonly _patientRepository: PatientRepository) {}

    async findOne(id: number): Promise<FindPatientDto> {
        const patient = await this._patientRepository.findOne(id);

        if (!patient) throw new HttpException('Patient not found', 404);

        return patient;
    }
}
