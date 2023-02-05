import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está craindo o pedido',
    example: '15e3acc0-b9cc-47d2-9460-cc9bab1134cc',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Numero da mesa que está realizando o pedido',
    example: 1,
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos produtos que estão no pedido',
    example:
      '["ada34d69-8412-4415-b888-ff4ff6cb4c95", "72926997-9020-480e-ad1d-e6c4c914e7db"]',
  })
  products: string[];
}
