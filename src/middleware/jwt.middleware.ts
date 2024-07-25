import { Inject, Middleware, NextFunction, httpError } from '@midwayjs/core';
import { Context } from 'egg';
import { JwtService } from '@midwayjs/jwt';
import { Utils } from '../utils/method';
// import { Constant } from '../common/Constant';
import { RedisService } from '@midwayjs/redis';

const whiteList = [
  '/api/user/create',
  '/api/get-image-captcha',
  '/api/get_users',
];

@Middleware()
export class JwtMiddleware {
  @Inject()
  jwtService: JwtService;

  @Inject()
  utils: Utils;

  @Inject()
  cacheUtil: RedisService;

  public static getName(): string {
    return 'jwt';
  }
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // console.log(ctx.headers);

      if (!ctx.headers['authorization']) {
        throw new httpError.UnauthorizedError(
          '缺少访问凭证，请添加Header[Authorization]=Bearer accessToken'
        );
      }
      const parts = ctx.get('authorization').trim().split(' ');

      if (parts.length !== 2) {
        throw new httpError.UnauthorizedError('无效的凭证');
      }
      const [scheme, token] = parts;
      if (!/^Bearer$/i.test(scheme)) {
        throw new httpError.UnauthorizedError('缺少Bearer');
      }
      try {
        const res: any = await this.jwtService.verify(token, {
          complete: true,
        });
        ctx.user = res?.payload || {};

        // const key = `${Constant.TOKEN}:${res?.payload.id}:${token}`;
        // const ucStr = await this.cacheUtil.get(key);
        // console.log('res', res);
      } catch (e) {
        // console.log('e', e);
        const user = this.jwtService.decode(token);
        // console.log('user>>>', user);
        const newToken = await this.utils.getToken(user);
        // console.log('newToken', newToken);
        ctx.set('Authorization', `Bearer ${newToken}`);
      }
      await next();
    };
  }

  public match(ctx: Context): boolean {
    console.log('ctx.path', ctx.path);

    return !whiteList.includes(ctx.path);
  }
}
