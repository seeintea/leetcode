/**
 * https://leetcode-cn.com/problems/largest-palindrome-product/
 * 最大回文数乘积
 * 给定一个整数 n ，返回 可表示为两个 n 位整数乘积的 最大回文整数 。因为答案可能非常大，所以返回它对 1337 取余 。
 */

function largestPalindrome(n: number): number {
  if (n === 1) return 9;
  const upper = 10 ** n - 1;
  for (let left = upper; left > upper / 10; left -= 1) {
    const right = String(left).split("").reverse().join("");
    const p = BigInt(String(left) + right);
    let x = BigInt(upper);
    while (x * x >= p) {
      if (p % x === 0n) {
        return Number(p % BigInt(1337));
      }
      x -= 1n;
    }
  }
  return -1;
}

export default largestPalindrome;
