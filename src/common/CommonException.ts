import { MidwayError } from '@midwayjs/core';
import { ErrorCode } from './ErrorCode';

/*
 * 通用异常
 */
export class CommonException extends MidwayError {
  code: number;
  msg: string;
  data: any;
  constructor(code: number, msg: string) {
    super(msg, code.toString());
    this.code = code;
    this.msg = msg || ErrorCode.ErrorCode2Message[code];
  }
}
