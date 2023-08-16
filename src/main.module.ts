import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './controller/patient/patient.module';

@Module({
    imports: [ConfigModule.forRoot(), PatientModule],
})
export class AppModule {}
