import { HttpModule } from '@nestjs/axios';

import { Module } from '@nestjs/common';

import { PatientController } from './patient.controller';

import { PatientServiceModule } from 'src/service/patient/patient.service.module';

@Module({
    controllers: [PatientController],
    imports: [HttpModule, PatientServiceModule],
})
export class PatientModule {}
