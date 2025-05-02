import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// To avoid multiple instances of Prisma Client when using hot reloading in development
if (process.env.NODE_ENV === 'development') {
  global.prisma = global.prisma || prisma;
}

export { prisma };
