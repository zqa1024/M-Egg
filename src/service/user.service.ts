import { Inject, Provide } from '@midwayjs/core';
import { prisma } from '../prisma';

import { Utils } from '../utils/method';
import { NewUserDTO } from '../dto/user';
import { decrypt, encrypt } from '../utils/passwordEncoder';

@Provide()
export class UserService {
  @Inject()
  utils: Utils;

  async register(data: NewUserDTO) {
    const isRepeat = await prisma.user2.findFirst({
      where: {
        userName: data.userName,
      },
    });

    console.log('isRepeat', isRepeat);
    if (isRepeat) {
      return {
        errorCode: 1,
        errorMessage: '用户名重复',
      };
    }
    const hash = encrypt(data.passWord);
    if (!hash) {
      return {
        errorCode: 1,
      };
    }
    try {
      const res2 = await prisma.user2.create({
        data: {
          userName: data.userName,
          passWord: hash,
          email: data.email,
        },
      });

      if (res2.id) {
        delete res2.passWord;
        return {
          data: res2,
        };
      }
    } catch (err) {
      console.log('err', err);
      return {
        errorCode: 1,
        errorMessage: '请检查参数',
      };
    }
  }

  async logining(data: NewUserDTO) {
    const user = await prisma.user2.findUnique({
      where: {
        userName: data.userName,
      },
    });

    if (!user) {
      return {
        errorCode: 1,
        errorMessage: '用户未注册',
      };
    }

    const result = decrypt(data.passWord, user.passWord);
    console.log('result', result);
    const { passWord, ...rest } = user;
    const res = this.utils.getTokenSync(rest);
    console.log('res', res, rest);
    return {
      data: {
        token: res,
      },
    };
  }

  async findUserByName(userName: string): Promise<NewUserDTO> {
    const res = await prisma.user2.findUnique({
      where: {
        userName,
      },
    });
    return res;
  }
}
