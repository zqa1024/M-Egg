import { Body, Post } from '@midwayjs/core';
import { PrismaService } from './BasePrisma';
import { PrismaModel } from '../_gen/prisma-class/index';

const { extraModels, ...rest } = PrismaModel;

type Keys = keyof typeof rest;

export abstract class BaseController<T extends Keys> {
  abstract getService(): PrismaService<T>;

  @Post('/create')
  async create(@Body() body: (typeof rest)[T]) {
    return this.getService().create('user', body);
  }
}
