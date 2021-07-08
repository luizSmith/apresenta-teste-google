import PatientEntity from "repositories/entities/patient.entity";
import IPatientRepository from "../interfaces/patient.repository.interface";

class PatientRepositoryFake implements IPatientRepository {

    private repository;

    constructor () {
        this.repository = [];
    }

    async findById(id: number): Promise<PatientEntity> {
        throw new Error("Method not implemented.");
    }
    
}

export default PatientRepositoryFake;
