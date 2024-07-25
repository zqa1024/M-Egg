import { JwtService } from '@midwayjs/jwt';
import { App, Inject, Provide, Scope, ScopeEnum } from '@midwayjs/core';
import { Application } from 'egg';

@Provide()
@Scope(ScopeEnum.Request, { allowDowngrade: true })
export class Utils {
  @Inject()
  jwtService: JwtService;

  @App()
  app: Application;

  async getToken(data) {
    const { iat, exp, ...rest } = data;
    const jwtConfig = this.app.config.jwt;
    const data2 = await this.jwtService.sign(rest, jwtConfig.secret, {
      expiresIn: '1h',
    });
    return data2;
  }

  getTokenSync(data) {
    const { iat, exp, ...rest } = data;
    const jwtConfig = this.app.config.jwt;
    const data2 = this.jwtService.signSync(rest, jwtConfig.secret, {
      expiresIn: '1h',
    });
    return data2;
  }
}
