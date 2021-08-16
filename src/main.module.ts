import { Module } from '@nestjs/common';
import { UserModule } from './controller/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '',
            port: 3306,
            username: '',
            password: '',
            database: '',
            synchronize: true,
            autoLoadEntities: true,
        }),
    ],
})
export class AppModule {}
