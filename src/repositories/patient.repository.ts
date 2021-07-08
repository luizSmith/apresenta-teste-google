import { injectable } from "inversify";

import { getRepository, Repository } from "typeorm";
import IPatientRepository from "./interfaces/patient.repository.interface";

import PatientEntity from "./entities/patient.entity";

@injectable()
class PatientRepository implements IPatientRepository {
    private repository: Repository<PatientEntity>;

    constructor () {
        this.repository = getRepository(PatientEntity);
    }

    async findById(id: number): Promise<PatientEntity> {
        let patient = await this.repository.findOne({
            id_paciente: id
        });

        return patient;
    }
}

export default PatientRepository;
