import { inject } from "inversify";
import { controller, httpGet, requestParam } from 'inversify-express-utils';
import { ApiOperationGet, ApiPath, SwaggerDefinitionConstant } from "swagger-express-ts";

import { TYPES } from "../infraestructure/constants/dependency.types";

import PatientResponse from "./response/patient.response";
import IPatientController from "./interfaces/patient.controller.interface";
import IPatientService from "services/interfaces/patient.service.interface";

@ApiPath({
    path: '/patients',
    name: "Pacientes"
})
@controller('/patients')
class PatientController implements IPatientController {
    constructor(
        @inject(TYPES.IPatientService)  private _patientService: IPatientService
    ) {}

    @ApiOperationGet({
        path: '/{id}',
        description: 'Lista dados paciente',
        parameters: {
            path: {
                id: {
                    name: 'id',
                    required: true,
                    type: SwaggerDefinitionConstant.Parameter.Type.NUMBER,
                }
            }
        },
        responses: { 
            200: {}, 
            500: {}
        }
    })
    @httpGet(`/:id`)
    async find(@requestParam('id') id: number): Promise<PatientResponse> {
        return await this._patientService.findById(id);
    }
}

export default PatientController;
