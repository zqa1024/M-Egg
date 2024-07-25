import { Provide } from '@midwayjs/decorator';
import { prisma } from '../prisma';
import { PrismaService } from '../common/BasePrisma';
// import { PrismaModel } from '../_gen/prisma-class/index';
import type * as APrismaTypes from '@prisma/client';

@Provide()
export class RecordService extends PrismaService<'records'> {
  getModel() {
    return prisma.records;
  }

  async findByUsername(id: number): Promise<APrismaTypes.records> {
    return await this.getModel().findFirst({
      where: {
        id,
      },
    });
  }

  async test() {}
}
