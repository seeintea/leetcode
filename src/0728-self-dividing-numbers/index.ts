/**
 * https://leetcode-cn.com/problems/self-dividing-numbers/
 * 自除数
 * 自除数 是指可以被它包含的每一位数整除的数。
 * 例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 * 自除数 不允许包含 0 。
 * 给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。
 */

function selfDividingNumbers(left: number, right: number): number[] {
  const ret = [];
  for (let num = left; num <= right; num += 1) {
    let op = num;
    let remaining = 0;
    while (op > 0 && remaining === 0) {
      const val = op % 10;
      remaining = num % val;
      op = Math.floor(op / 10);
    }
    if (remaining === 0) {
      ret.push(num);
    }
  }
  return ret;
}

export default selfDividingNumbers;
