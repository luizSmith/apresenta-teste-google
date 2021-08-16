import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Primeiro Nome',
    })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Ultimo Nome',
    })
    lastName: string;
}
