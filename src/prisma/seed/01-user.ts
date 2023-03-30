import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
  {
    nickname: 'PettersonBresolin',
    name: 'PettBresolin',
    password: 'Abcd@1234',
    image:
      'https://lh3.googleusercontent.com/a/AEdFTp7_GyE_zcl4tJfMtMp7f-UkiKwTmF4Kms1mMb-IZSs=s288-p-rw-no',
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { nickname: obj.nickname },
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
      },
    });
  }
};
