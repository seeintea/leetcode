/**
 * https://leetcode-cn.com/problems/binary-number-with-alternating-bits/
 * 交替位二进制数
 * 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
 */

function simluation(n: number): boolean {
  let remainder = 2;
  while (n > 0) {
    const next = n % 2;
    if (next === remainder) {
      return false;
    }
    remainder = next;
    n = Math.floor(n / 2);
  }
  return true;
}

/**
 * example:
 * input n = 5
 * n => 101
 * n >> 1 => 010
 * prev = n ^ (n >> 1) => 111
 * prev (0111) & (prev + 1) (1000) === 0
 * input n = 7
 * n => 111
 * n >> 1 => 011
 * prev = n ^ (n >> 1) => 100
 * prev (100) & (prev + 1) (101) === 4 !== 0
 */
function bitwise(n: number): boolean {
  const prev = n ^ (n >> 1);
  return (prev & (prev + 1)) === 0;
}

export { simluation, bitwise };
