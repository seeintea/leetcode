/**
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/
 * 阶乘后的零
 * 给定一个整数 n ，返回 n! 结果中尾随零的数量。
 * 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 */

function trailingZeroes(n: number): number {
  let ret = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    ret += n;
  }
  return ret;
}

export default trailingZeroes;
