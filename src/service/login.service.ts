import { Provide } from '@midwayjs/core';
// import { prisma } from '../prisma';

@Provide()
export class LoginStatus {
  async register(data) {
    console.log(' register data', data);
  }
}
