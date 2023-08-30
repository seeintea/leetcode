/**
 * plusOne <https://leetcode.cn/problems/plus-one/>
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    digits[i] += 1;
    digits[i] = digits[i] % 10;
    if (digits[i] !== 0) return digits;
  }
  digits.unshift(1);
  return digits;
}

export { plusOne };
