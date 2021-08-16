import {
    Body,
    CacheKey,
    CacheTTL,
    Controller,
    Get,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/service/user/dto/CreateUser.dto';
import { FindUserDto } from 'src/service/user/dto/FindUser.dto';
import { UserDomain } from '../../service/user/user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly _userDomain: UserDomain) {}

    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Success while getting User List',
        type: FindUserDto,
        isArray: true,
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Request Failure with status 500',
    })
    @CacheKey('UserController_listUsers') // NOME DO CACHE
    @CacheTTL(10 * 60) // SEGUNDOS
    async listUsers(): Promise<FindUserDto[]> {
        return await this._userDomain.listUsers();
    }

    @Post()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Success while creating new User',
        type: FindUserDto,
        isArray: true,
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Request Failure with status 500',
    })
    async createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<FindUserDto> {
        return await this._userDomain.createUser(createUserDto);
    }
}
