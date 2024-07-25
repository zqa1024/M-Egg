// import { prisma } from "../prisma";

export const modelNames = [
  'chat',
  'User',
  'Post',
  'logined',
  'records',
  'User2',
] as const;

export type IModelName = (typeof modelNames)[number];
