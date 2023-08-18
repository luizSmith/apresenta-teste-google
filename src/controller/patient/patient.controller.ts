import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('patient')
@ApiTags('Patient')
export class PatientController {
    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'success on returning patient',
        type: String,
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Request Failure with status 500',
    })
    getTeste(): string {
        const retorno = 'Essa é uma rota teste!'

        return retorno;
    }
}
