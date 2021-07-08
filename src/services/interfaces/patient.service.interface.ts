import PatientEntity from "repositories/entities/patient.entity";

export default interface IPatientService {
    findById(id: Number): Promise<PatientEntity>;
}
