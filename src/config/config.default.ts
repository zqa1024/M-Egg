import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    jwt: {
      secret: appInfo.name + '_1680492584232_5555',
      expiresIn: '6000',
    },
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1680492584232_2582',
    egg: {
      port: 7001,
    },
    validate: {
      validationOptions: {
        allowUnknown: true, // 全局生效
      },
    },
    redis: {
      client: {
        port: 16908, // Redis port
        host: 'redis-16908.c294.ap-northeast-1-2.ec2.cloud.redislabs.com', // Redis host
        password: 'OQoQPc11fC5IpaFUziwJ4DTqVBqD64gs',
        // db: 0, // Redis db
      },
    },
    development: {
      // ignoreDirs: ['src/script/models.ts'],
      // reloadPattern: ['!**/*', '!src/script/models.ts'],
      watchDirs: [''],
      overrideDefault: true,
    },
    axios: {
      /*  default: {
        // 所有实例复用的配置
      },
      clients: {
        // 默认实例的配置
        default: {
          baseURL: 'https://api.example.com',
          // `headers` are custom headers to be sent
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          timeout: 1000, // default is `0` (no timeout)

          // `withCredentials` indicates whether or not cross-site Access-Control requests
          // should be made using credentials
          withCredentials: false, // default
        },
      } */
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
