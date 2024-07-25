import { PrismaClient, Prisma } from '@prisma/client';
// export type { User2 } from '@prisma/client';
import type * as APrismaTypes from '@prisma/client';

export const prisma = new PrismaClient({});

export type ModelName = Prisma.ModelName;
export interface PrismaModelsType {
  user: APrismaTypes.user;
  post: APrismaTypes.post;
  logined: APrismaTypes.logined;
  records: APrismaTypes.records;
  user2: APrismaTypes.user2;
  chat: APrismaTypes.chat;
}
