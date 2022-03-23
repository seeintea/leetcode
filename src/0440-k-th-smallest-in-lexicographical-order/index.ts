/**
 * https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/
 * 字典序的第K小数字
 * 给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。
 */

function getSubTree(current: number, total: number): number {
  let count = 0;
  let first = current;
  let last = current;
  while (first <= total) {
    count += Math.min(last, total) - first + 1;
    first = first * 10;
    last = last * 10 + 9;
  }
  return count;
}

function findKthNumber(n: number, k: number): number {
  let current = 1;
  k -= 1;
  while (k > 0) {
    const count = getSubTree(current, n);
    if (count <= k) {
      k -= count;
      current += 1;
    } else {
      current = current * 10;
      k -= 1;
    }
  }
  return current;
}

export default findKthNumber;
