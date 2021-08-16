import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto {
    @ApiProperty({
        description: 'ID do usuario',
    })
    id: number;

    @ApiProperty({
        description: 'Primeiro Nome',
    })
    firstName: string;

    @ApiProperty({
        description: 'Ultimo Nome',
    })
    lastName: string;

    @ApiProperty({
        description: 'Nome Completo',
    })
    completeName: string;
}
