import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './entity/patient.entity';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
    async findOneById(id: number): Promise<Patient> {
        return await this.findOne(id);
    }
}
