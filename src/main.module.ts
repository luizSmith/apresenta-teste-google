import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './controller/patient/patient.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            port: Number(process.env.PORT_DB) || 3306,
            host: process.env.HOST_DB,
            username: process.env.USERNAME_DB,
            password: process.env.PASSWORD_DB,
            database: process.env.DATABASE,
            logging: process.env.LOGGING == 'true',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
        }),
        PatientModule,
    ],
})
export class AppModule {}
