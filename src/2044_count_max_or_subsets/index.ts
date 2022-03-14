/**
 * https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets
 * 统计按位或能得到最大值的子集数目
 * 给你一个整数数组 nums ，请你找出 nums 子集 按位或 可能得到的 最大值 ，并返回按位或能得到最大值的 不同非空子集的数目 。
 * 如果数组 a 可以由数组 b 删除一些元素（或不删除）得到，则认为数组 a 是数组 b 的一个 子集 。如果选中的元素下标位置不一样，则认为两个子集 不同 。
 * 对数组 a 执行 按位或，结果等于 a[0] OR a[1] OR ... OR a[a.length - 1]（下标从 0 开始）。
 */

function countMaxOrSubsets(nums: number[]): number {
  const len = nums.length;
  let maxOr = 0;
  let ret = 0;
  for (let i = 0; i < 1 << len; i += 1) {
    let orVal = 0;
    for (let j = 0; j < len; j += 1) {
      if (((i >> j) & 1) === 1) {
        orVal |= nums[j];
      }
    }
    if (orVal > maxOr) {
      ret = 1;
      maxOr = orVal;
    } else if (orVal === maxOr) {
      ret += 1;
    }
  }
  return ret;
}

export default countMaxOrSubsets;
