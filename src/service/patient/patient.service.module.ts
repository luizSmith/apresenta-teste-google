import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PatientRepository } from 'src/repository/patient/patient.repository';

import { PatientService } from './patient.service';

@Module({
    providers: [PatientService],
    imports: [TypeOrmModule.forFeature([PatientRepository])],
    exports: [PatientService],
})
export class PatientServiceModule {}
