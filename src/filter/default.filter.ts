import { Catch } from '@midwayjs/core';
import { Context } from 'egg';

@Catch()
export class DefaultErrorFilter {
  async catch(err: Error, ctx: Context) {
    // ...
    ctx.logger.error(err);
    // ...
    return {
      status: 500,
      message: 'got 500 error, ' + err.message,
    };
  }
}
