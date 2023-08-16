import { HttpModule } from '@nestjs/axios';

import { Module } from '@nestjs/common';

import { PatientController } from './patient.controller';

@Module({
    controllers: [PatientController],
    imports: [HttpModule],
})
export class PatientModule {}
