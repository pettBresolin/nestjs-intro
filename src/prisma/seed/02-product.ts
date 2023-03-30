import { Prisma, PrismaClient } from '@prisma/client';

export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Pizza de Mussarela',
    description: 'Queijo mussarela saborosa, massa fina e tomates cereja',
    price: 56.0,
    image: 'https://i.imgur.com/hNE75Iw.png',
  },
  {
    name: 'Pizza de Calabresa',
    description: 'Queijo mussarela saborosa, massa fina e tomates cereja',
    price: 56.0,
    image: 'https://i.imgur.com/hNE75Iw.png',
  },
  {
    name: 'Pizza de Frango',
    description: 'Queijo mussarela saborosa, massa fina e tomates cereja',
    price: 56.0,
    image: 'https://i.imgur.com/hNE75Iw.png',
  },
];

export const product = async (prisma: PrismaClient) => {
  for (const obj of Object.values(products)) {
    await prisma.product.upsert({
      where: { name: obj.name },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
