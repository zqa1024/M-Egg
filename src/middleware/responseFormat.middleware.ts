import { Middleware, IMiddleware } from '@midwayjs/core';
import { Context } from 'egg';
import { NextFunction } from '@midwayjs/core';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

@Middleware()
export class ResponseFormatMiddleware
  implements IMiddleware<Context, NextFunction>
{
  resolve() {
    return async (
      ctx: Context,
      next: NextFunction
    ): Promise<ResponseStructure> => {
      const result = await next();
      console.log('result', result);
      const Response = {
        success: true,
        data: {},
        errorCode: 0,
        errorMessage: '',
        showType: ErrorShowType.SILENT,
      };

      result?.data && (Response.data = result.data);
      result?.showType && (Response.showType = result.showType);
      if (result?.errorCode) {
        Response.success = false;
        Response.data = null;
        Response.errorCode = result?.errorCode;
        Response.errorMessage = result?.errorMessage;
        ctx.status = 500;
      }

      return Response;
    };
  }

  match(ctx) {
    return ctx.path.indexOf('/api') !== -1;
  }
}
