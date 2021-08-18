import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindPatientDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Id Patient',
    })
    id_paciente: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Complete Name',
    })
    nome: string;
}
