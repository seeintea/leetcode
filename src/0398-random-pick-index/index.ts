/**
 * https://leetcode-cn.com/problems/random-pick-index/
 * 随机数索引
 * 给你一个可能含有 重复元素 的整数数组 nums ，请你随机输出给定的目标数字 target 的索引。你可以假设给定的数字一定存在于数组中。
 * 实现 Solution 类：
 * Solution(int[] nums) 用数组 nums 初始化对象。
 * int pick(int target) 从 nums 中选出一个满足 nums[i] == target 的随机索引 i 。如果存在多个有效的索引，则每个索引的返回概率应当相等。
 */

class Solution {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  pick(target: number): number {
    let ret = 0;
    for (let i = 0, cnt = 0; i < this.nums.length; i += 1) {
      if (this.nums[i] == target) {
        cnt += 1;
        if (Math.floor(Math.random() * cnt) === 0) {
          ret = i;
        }
      }
    }
    return ret;
  }
}

export default Solution;
