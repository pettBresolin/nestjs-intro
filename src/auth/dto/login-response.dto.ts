import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IlBldHRlcnNvbkJyZXNvbGluIiwiaWF0IjoxNjc2Njc2NjQ4LCJleHAiOjE2NzY3NjMwNDh9.tWP8sI_Ui_z0ut_iI00EcPPymQERKkuTwwY1BsY8iQ4',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
