export class ErrorCode {
  /**
   * 0: 成功
   */
  static readonly SUCCESS = 0;

  /**
   * @deprecated 1: 通用错误
   */
  static readonly ERROR = 1;

  /**
   * 2: 参数错误
   */
  static readonly ERROR_PARAMS = 2;
  /**
   * 3: 认证错误
   */
  static readonly ERROR_AUTH = 3;
  /**
   * 4: 数据库错误
   */
  static readonly ERROR_DB = 4;
  /**
   * 5: 未找到
   */
  static readonly ERROR_NOT_FOUND = 5;
  /**
   * 6: 已存在
   */
  static readonly ERROR_EXIST = 6;
  /**
   * 7: 无权限
   */
  static readonly ERROR_NO_PERMISSION = 7;
  /**
   * 8: 未登录
   */
  static readonly ERROR_NOT_LOGIN = 8;
  /**
   * 9: 未知错误
   */
  static readonly ERROR_UNKNOWN = 9;

  static readonly ErrorCode2Message = {
    [ErrorCode.SUCCESS]: '成功',
    [ErrorCode.ERROR]: '通用错误',
    [ErrorCode.ERROR_PARAMS]: '参数错误',
    [ErrorCode.ERROR_AUTH]: '认证错误',
    [ErrorCode.ERROR_DB]: '数据库错误',
    [ErrorCode.ERROR_NOT_FOUND]: '未找到',
    [ErrorCode.ERROR_EXIST]: '已存在',
    [ErrorCode.ERROR_NO_PERMISSION]: '无权限',
    [ErrorCode.ERROR_NOT_LOGIN]: '未登录',
    [ErrorCode.ERROR_UNKNOWN]: '未知错误',
  };
}
