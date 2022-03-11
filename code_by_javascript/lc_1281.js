/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * @description 整数的各位积和之差
 */

/**
 * @param {number} n
 * @return {number}
 * @result 执行用时：72 ms | 内存消耗：37.6 MB
 */
var subtractProductAndSum = function (n) {
  let mul = 1, sum = 0
  while (n > 0) {
    sum += n % 10
    mul *= n % 10
    n = Math.floor(n / 10)
  }
  return mul - sum
};
