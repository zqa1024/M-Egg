import { Utils } from '../utils/method';
import { Inject, Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';
import { prisma } from '../prisma';
import { JwtService } from '@midwayjs/jwt';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    console.log('options', options);
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}

@Provide()
export class User {
  @Inject()
  jwtService: JwtService;

  @Inject()
  utils: Utils;

  async getUser(options: IUserOptions) {
    console.log('options2222', options);
    const user: any = await prisma.user.findUnique({
      where: {
        id: options.uid,
      },
    });
    return user;
  }
  createUser(data) {
    if (data.id) {
      return prisma.user.update({
        where: {
          id: data.id,
        },
        data,
      });
    } else {
      return prisma.user.create({
        data,
      });
    }
  }
  async register(data) {
    return prisma.user.create({
      data,
    });
  }
  async login(data) {
    console.log('data', data);
    // return prisma.user.findFirst({
    //   where: {
    //     email: data.email,
    //   },
    // });
    const user = await prisma.user.findFirst({
      where: {
        name: data.username,
      },
    });

    console.log('user>>>>>>', user);
    if (!user) {
      throw new Error('用户不存在');
    }

    if (user?.password !== data?.password) {
      throw new Error('密码错误');
    }
    return user;
  }
  async getUserInfo(data) {
    if (Object.keys(data).length > 1) {
      return data;
    }
    return prisma.user.findFirst({
      where: {
        id: data.id,
      },
    });
  }
  async getToken(data) {
    const user = await this.getUserInfo(data);

    console.log(1);
    const res = await this.utils.getToken(user);
    console.log(2);
    await prisma.logined.create({
      data: {
        userId: user.id,
        token: res,
      },
    });
    return res;
  }
  // checkLogin(data) {
  //   return prisma.logined.findFirst({
  //     where: {
  //       token: data.token,
  //     },
  //   });
  // }
}
