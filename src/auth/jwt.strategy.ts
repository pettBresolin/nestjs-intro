import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validade(payload: { nickname: string }) {
    const user = await this.prisma.user.findUnique({
      where: { nickname: payload.nickname },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Ususário não exixte ou não está autenticado',
      );
    }

    delete user.password;

    return user;
  }
}
