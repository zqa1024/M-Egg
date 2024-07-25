import { CommonException } from './CommonException';

export class Assert {
  /**
   * 不为空断言
   */
  static notNull(data: any, errorCode: number, msg?: string) {
    if (
      data === null ||
      data === undefined ||
      data === '' ||
      data === 0 ||
      data === false ||
      Number.isNaN(data) ||
      (Array.isArray(data) && data.length === 0) ||
      (typeof data === 'object' && Object.keys(data).length === 0) ||
      (typeof data === 'string' && data.trim().length === 0) ||
      (typeof data === 'number' && data === 0)
    ) {
      throw new CommonException(errorCode, msg);
    }
  }

  /**
   * 为空断言
   */
  static isNull(data: any, errorCode: number, msg?: string) {
    if (data !== null && data !== undefined) {
      throw new CommonException(errorCode, msg);
    }
  }

  /**
   * 不为空字符串断言
   */
  static notEmpty(data: string, errorCode: number, msg?: string) {
    if (!data || data.trim().length === 0) {
      throw new CommonException(errorCode, msg);
    }
  }

  /**
   * 布尔断言
   */
  static isTrue(data: boolean, errorCode: number, msg?: string) {
    if (!data) {
      throw new CommonException(errorCode, msg);
    }
  }
}
