// import { User } from './../controller/user.controller';
import { App } from '@midwayjs/core';
import { Application } from 'egg';
import { ModelName } from '../prisma';
import { Assert } from './Assert';
import { ErrorCode } from './ErrorCode';

import { PrismaModel } from '../_gen/prisma-class/index';

const { extraModels, ...rest } = PrismaModel;

Object.keys(rest).forEach(key => {
  rest[key] = new rest[key]();
  return key;
});

type Keys = keyof typeof rest;

// type typeObj3<T extends Keys> = [T] extends [Keys] ? (typeof prisma)[T] : never;

/*
 * Prisma 基类
 */
//我希望这个类能够自动的根据传入的参数，自动的推导出来
export abstract class PrismaService<T extends Keys> {
  // 我希望这个方法能够自动的根据传入的参数，自动的推导出来
  abstract getModel(): any;

  @App()
  app: Application;

  async create(modelName: ModelName, data: any) {
    Assert.notNull(modelName, ErrorCode.ERROR_PARAMS);
    console.log('data', data);
    return this.getModel()?.create({ data });
  }

  async findOne(modelName: ModelName, where: any) {
    Assert.notNull(modelName, ErrorCode.ERROR_PARAMS);
    return this.getModel().findFirst({ where });
  }

  async update(modelName: ModelName, where: any, data: any) {
    Assert.notNull(modelName, ErrorCode.ERROR_PARAMS);
    Assert.notNull(where, ErrorCode.ERROR_PARAMS);
    Assert.notNull(data, ErrorCode.ERROR_PARAMS);
    return this.getModel().update({
      where,
      data,
    });
  }

  async delete(modelName: ModelName, where: any) {
    Assert.notNull(where, ErrorCode.ERROR_PARAMS);
    return this.getModel().delete({ where });
  }

  async deleteById(modelName: ModelName, id: number) {
    Assert.notNull(id, ErrorCode.ERROR_PARAMS);
    return this.getModel().delete({ where: { id } });
  }

  async findUnique(modelName: ModelName, where: any) {
    Assert.notNull(where, ErrorCode.ERROR_PARAMS);
    return this.getModel().findUnique({ where });
  }

  async findById(modelName: ModelName, id: number) {
    Assert.notNull(id, ErrorCode.ERROR_PARAMS);
    return this.getModel().findUnique({ where: { id } });
  }
}
