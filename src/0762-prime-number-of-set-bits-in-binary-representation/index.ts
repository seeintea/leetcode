/**
 * https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/
 *  二进制表示中质数个计算置位
 * 给你两个整数 left 和 right ，在闭区间 [left, right] 范围内，统计并返回 计算置位位数为质数 的整数个数。
 * 计算置位位数 就是二进制表示中 1 的个数。
 * 例如， 21 的二进制表示 10101 有 3 个计算置位。
 */

function calcBitCount(bit: number): number {
  return bit.toString(2).split("0").join("").length;
}

function isPrimeNumber(count: number): boolean {
  if (count < 2) {
    return false;
  }
  for (let i = 2; i * i <= count; i += 1) {
    if (count % i === 0) {
      return false;
    }
  }
  return true;
}

function math(left: number, right: number): number {
  let ret = 0;
  for (let idx = left; idx <= right; idx += 1) {
    if (isPrimeNumber(calcBitCount(idx))) {
      ret += 1;
    }
  }
  return ret;
}

function mathIsPrimeOptimize(left: number, right: number): number {
  let ret = 0;
  for (let idx = left; idx <= right; idx += 1) {
    // right < 2^20 => 2,3,5,7,11,13,17,19
    if (((1 << calcBitCount(idx)) & 665772) !== 0) {
      ret += 1;
    }
  }
  return ret;
}

export { math, mathIsPrimeOptimize };
