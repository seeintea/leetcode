/**
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 * 统计各位数字都不同的数字个数
 * 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10n 。
 */

function countNumbersWithUniqueDigits(n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 10;
  let ret = 10;
  let cur = 9;
  for (let idx = 0; idx < n - 1; idx += 1) {
    cur *= 9 - idx;
    ret += cur;
  }
  return ret;
}

export default countNumbersWithUniqueDigits;
