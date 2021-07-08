import PatientEntity from "repositories/entities/patient.entity";

export default interface IPatientRepository {
    findById(id: number): Promise<PatientEntity>;
}
