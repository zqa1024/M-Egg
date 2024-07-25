import { PrismaModel } from '../_gen/prisma-class/index';
import { prisma } from '../prisma';

const { extraModels, ...rest } = PrismaModel;

type Keys = keyof typeof rest;

type NewType = typeof prisma;

export abstract class BaseService<T extends Keys> {
  abstract getModel(): NewType[T];
}
