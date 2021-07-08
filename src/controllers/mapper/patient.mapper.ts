import 'reflect-metadata';
import PatientEntity from 'repositories/entities/patient.entity';
import PatientResponse from 'controllers/response/patient.response';

class PatientMapper {
    
    find(patient: PatientEntity): PatientResponse {
        // Aqui deu um de-para convertendo pois os nomes dos campos são iguais
        // Se houvessem campos diferentes poderiamos fazer um foreach ou algum library para dar um de-para nos campos
        return patient as PatientResponse;
    }
}

export default PatientMapper;
