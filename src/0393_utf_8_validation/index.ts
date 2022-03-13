/**
 * https://leetcode-cn.com/problems/utf-8-validation
 * UTF-8 编码验证
 * 给定一个表示数据的整数数组data，返回它是否为有效的 UTF-8 编码。
 * UTF-8 中的一个字符可能的长度为 1 到 4 字节，遵循以下的规则：
 * 对于 1 字节的字符，字节的第一位设为 0 ，后面 7 位为这个符号的 unicode 码。
 * 对于 n 字节的字符 (n > 1)，第一个字节的前 n 位都设为1，第 n+1 位设为 0 ，后面字节的前两位一律设为 10 。剩下的没有提及的二进制位，全部为这个符号的 unicode 码。
 */

const validUtf8 = (data: number[]): boolean => {
  const len = data.length;
  for (let idx = 0; idx < len; ) {
    const head = data[idx];
    let ptr = 7;
    while (ptr >= 0 && ((head >> ptr) & 1) === 1) ptr -= 1;
    const digit = 7 - ptr;
    if (digit == 1 || digit > 4) return false;
    if (idx + digit - 1 >= len) return false;
    for (let next = idx + 1; next < idx + digit; next += 1) {
      if (((data[next] >> 7) & 1) === 1 && ((data[next] >> 6) & 1) === 0) continue;
      return false;
    }
    if (digit === 0) {
      idx += 1;
    } else {
      idx += digit;
    }
  }
  return true;
};

export default validUtf8;
