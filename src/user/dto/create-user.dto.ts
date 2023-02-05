import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Utilizado no login. Deve ser único',
    example: 'PettersonBresolin',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Apenas para exibição',
    example: 'PettBresolin',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example:
      'https://lh3.googleusercontent.com/a/AEdFTp7_GyE_zcl4tJfMtMp7f-UkiKwTmF4Kms1mMb-IZSs=s288-p-rw-no',
  })
  image: string;
}
