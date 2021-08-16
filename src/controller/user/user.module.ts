import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';

import { UserDomain } from '../../service/user/user.service';
import { UserRepository } from '../../repository/user/user.repository';
import { UserController } from './user.controller';
import { User } from 'src/repository/user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [UserController],
    providers: [
        UserDomain,
        UserRepository,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
    imports: [
        HttpModule,
        CacheModule.register(),
        TypeOrmModule.forFeature([User]),
    ],
    exports: [UserRepository],
})
export class UserModule {}
