import { Catch } from '@midwayjs/core';
import { MidwayValidationError } from '@midwayjs/validate';
import { Context } from 'egg';

@Catch(MidwayValidationError)
export class ValidateErrorFilter {
  async catch(error: MidwayValidationError, ctx: Context) {
    console.log(ctx.logger);
    ctx.logger?.info(error);
    return {
      status: 422,
      message: '参数校验错误，' + error.message,
    };
  }
}
