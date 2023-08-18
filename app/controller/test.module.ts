import { HttpModule } from '@nestjs/axios';

import { Module } from '@nestjs/common';

import { TestController } from './test.controller';

@Module({
    controllers: [TestController],
    imports: [HttpModule],
})
export class TestModule {}
