import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('test')
@ApiTags('Test')
export class TestController {
    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Rota de teste',
        type: String,
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Request Failure with status 500',
    })
    getTest(): string {
        const retorno = 'Essa é uma rota teste!'
        return retorno;
    }
}
