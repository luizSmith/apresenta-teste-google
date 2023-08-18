import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './controller/test.module';

@Module({
    imports: [ConfigModule.forRoot(), TestModule],
})
export class AppModule {}
