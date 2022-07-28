/**
 * https://leetcode.cn/problems/rank-transform-of-an-array/
 * 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。
 * 序号代表了一个元素有多大。序号编号的规则如下：
 * 序号从 1 开始编号。
 * 一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
 * 每个数字的序号都应该尽可能地小。
 */

function arrayRankTransform(arr: number[]): number[] {
  const sort_arr = [...arr].sort((a, b) => a - b);
  const rank: Map<number, number> = new Map();
  for (const num of sort_arr) {
    if (!rank.has(num)) {
      rank.set(num, rank.size + 1);
    }
  }
  const len = arr.length;
  const ret = new Array(len).fill(0);
  for (let i = 0; i < len; i += 1) {
    ret[i] = rank.get(arr[i]);
  }
  return ret;
}

export default arrayRankTransform;
