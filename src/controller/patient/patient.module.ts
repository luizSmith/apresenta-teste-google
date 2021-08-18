import { HttpModule } from '@nestjs/axios';

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientService } from 'src/service/patient/patient.service';
import { PatientController } from './patient.controller';

import { PatientRepository } from 'src/repository/patient/patient.repository';
import { Patient } from 'src/repository/patient/entity/patient.entity';

@Module({
    controllers: [PatientController],
    providers: [PatientService, PatientRepository],
    imports: [HttpModule, TypeOrmModule.forFeature([Patient])],
    exports: [PatientRepository],
})
export class PatientModule {}
