import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-ts";

@ApiModel({
    name: 'Patient',
    description: 'DRC patient'
})
class PatientDTO {
    id_paciente: number;
    nome: string;
    cpfFormatado: string;

    // Não pertence a entidade Pacientes, um dos motivos dessa classe virar uma DTO para a Service
    quantidadeAtendimentos: number;; 
    quantidadeAtendimentosRelizados: number;
    quantidadeAtendimentosCancelados: number;
    quantidadeAtendimentosEstornados: number;
}

export default PatientDTO;
