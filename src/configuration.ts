import { App, Configuration, ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as axios from '@midwayjs/axios';
import * as validate from '@midwayjs/validate';
import { ValidateErrorFilter } from './filter/validate.filter';
import * as jwt from '@midwayjs/jwt';
import { JwtMiddleware } from './middleware/jwt.middleware';
import { prisma } from './prisma';
import * as captcha from '@midwayjs/captcha';
import * as info from '@midwayjs/info';
import { NotFoundFilter } from './filter/notfound.filter';
import { DefaultErrorFilter } from './filter/default.filter';
import { ResponseFormatMiddleware } from './middleware/responseFormat.middleware';
import * as redis from '@midwayjs/redis';

interface IMoreApp {
  prisma: typeof prisma;
}
@Configuration({
  imports: [
    egg,
    redis,
    jwt,
    validate,
    captcha,
    axios,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application & IMoreApp;

  async onReady() {
    this.app.useFilter([
      ValidateErrorFilter,
      NotFoundFilter,
      DefaultErrorFilter,
    ]);
    this.app.useMiddleware([JwtMiddleware, ResponseFormatMiddleware]);
    this.app.prisma = prisma;
  }
}
