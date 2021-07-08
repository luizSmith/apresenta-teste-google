import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-ts";

@ApiModel({
    name: 'Patient',
    description: 'DRC patient'
})
class PatientResponse {
    @ApiModelProperty({
        required: true,
        example: [true],
        description: 'Id chave primária'
    })
    id_paciente: number;

    @ApiModelProperty({
        required: true,
        example: [true],
        description: 'Nome completo'
    })
    nome: string;
}

export default PatientResponse;
