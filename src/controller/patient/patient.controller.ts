import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindPatientDto } from 'src/service/patient/dto/FindPatient.dto';

@Controller('patient')
@ApiTags('Patient')
export class PatientController {
    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'success on returning patient',
        type: FindPatientDto,
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Request Failure with status 500',
    })
    findOne(): object {
        const retorno = {
            mensagem: 'Todos os pacientes estão aqui!',
        };

        return retorno;
    }
}
