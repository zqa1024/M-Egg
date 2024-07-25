import bcrypt = require('bcrypt');

/**
 * 加密。加上前缀{bcrypt}，为了兼容多种加密算法，这里暂时只实现bcrypt算法
 */
export function encrypt(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return '{bcrypt}' + hash;
}

/**
 * 解密
 * @param password 密码
 * @param hash 加密后的密码
 * @returns
 * @throws {Error} 密码错误
 * @throws {Error} 加密算法错误
 * @throws {Error} 加密后的密码错误
 * @throws {Error} 加密后的密码前缀错误
 */
export function decrypt(password: string, hash: string) {
  if (!hash.startsWith('{bcrypt}')) {
    throw new Error('加密后的密码前缀错误');
  }
  const hash2 = hash.substring(8);
  const result = bcrypt.compareSync(password, hash2);
  if (!result) {
    throw new Error('密码错误');
  }
  return true;
}
