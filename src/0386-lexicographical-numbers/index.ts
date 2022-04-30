/**
 * https://leetcode-cn.com/problems/lexicographical-numbers/
 * 字典序排数
 * 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。
 * 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
 */

function helper(cur: number, n: number, ret: number[]) {
  if (cur > n) return;
  for (let i = cur; i <= cur + 9 && i <= n; i += 1) {
    ret.push(i);
    helper(i * 10, n, ret);
  }
}

function lexicalOrder(n: number): number[] {
  const ret = [];
  const parent = n > 9 ? 9 : n;
  for (let i = 1; i <= parent; i += 1) {
    ret.push(i);
    helper(i * 10, n, ret);
  }
  return ret;
}

export default lexicalOrder;
