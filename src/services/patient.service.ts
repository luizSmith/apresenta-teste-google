import { inject } from 'inversify';
import { TYPES } from '../infraestructure/constants/dependency.types';
import IPatientRepository from '../repositories/interfaces/patient.repository.interface';
import PatientEntity from 'repositories/entities/patient.entity';
import IPatientService from './interfaces/patient.service.interface';

class PatientService implements IPatientService {
    constructor(
        @inject(TYPES.IPatientRepository) private _patientRepository: IPatientRepository
    ) {}

    public async findById(id: number): Promise<PatientEntity> {        
        return await this._patientRepository.findById(id);
    }
}

export default PatientService;
