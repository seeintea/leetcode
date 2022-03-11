/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/the-kth-factor-of-n/
 * @description n 的第 k 个因子
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * @result 执行用时：72 ms | 内存消耗：38 MB
 */
var kthFactor_v1 = function (n, k) {
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1
      if (count === k) {
        return i
      }
    }
  }
  return -1
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * @result 执行用时：64 ms | 内存消耗：38.1 MB
 */
var kthFactor_v2 = function (n, k) {
  let count = 0
  const outer = Math.floor(n / 2) + 1
  const map = new Map()
  for (let i = 1; i <= outer; i++) {
    if (map.has(i) || n % i === 0) {
      count++
      map.set(n / i, i)
    }
    if (count === k) {
      return i
    }
  }
  if (count + 1 === k) {
    return n
  }
  return -1
};