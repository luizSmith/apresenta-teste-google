import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindPatientDto } from 'src/service/patient/dto/FindPatient.dto';
import { PatientService } from 'src/service/patient/patient.service';

@Controller('patient')
@ApiTags('Patient')
export class PatientController {
    constructor(private readonly _patientService: PatientService) {}

    @Get(':id')
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'success on returning patient',
        type: FindPatientDto,
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Request Failure with status 500',
    })
    async findOne(@Param('id') id: number): Promise<FindPatientDto> {
        return await this._patientService.findOne(id);
    }
}
