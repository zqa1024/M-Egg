import { BaseController } from '../common/BaseController';
import { PrismaService } from '../common/BasePrisma';
import { Body, Controller, Get, Inject, Post } from '@midwayjs/core';
import { Context } from 'egg';
import { records } from '../_gen/prisma-class/records';
import { RecordService } from '../service/records.service';

@Controller('/api/records')
export class RecordsController extends BaseController<'records'> {
  @Inject()
  ctx: Context;

  @Inject()
  userService: RecordService;

  getService(): PrismaService<'records'> {
    if (this.userService) {
      return this.userService;
    } else {
      throw new Error('Method not implemented.');
    }
  }
  @Post('/create')
  async creates(@Body() body: records) {
    return this.userService.create('records', body);
  }
  @Get('/find')
  async find() {
    return this.userService.findOne('records', {});
  }
}
