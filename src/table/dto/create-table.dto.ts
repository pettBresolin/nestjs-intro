import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsNumber, IsPositive } from "class-validator";

export class createTableDto {
    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'Numero da mesa"',
        example: 1,
    })
    number: number;
}