import PatientResponse from "../response/patient.response";

export default interface IPatientController {
    find(id: Number): Promise<PatientResponse>;
}
