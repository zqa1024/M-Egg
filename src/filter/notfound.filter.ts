import { Catch, httpError, MidwayHttpError } from '@midwayjs/core';
import { Context } from 'egg';

@Catch(httpError.NotFoundError)
export class NotFoundFilter {
  async catch(err: MidwayHttpError, ctx: Context) {
    // ctx.redirect('/404.html');
    ctx.logger.error(err);
    return {
      status: 404,
      message: '404,' + ctx.path,
    };
  }
}
