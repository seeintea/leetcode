/**
 * maxConsecutiveOnes <https://leetcode.cn/problems/max-consecutive-ones/>
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 */

function maxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let current = 0;
  for (const item of nums) {
    if (item === 1) {
      current += 1;
    } else {
      max = Math.max(max, current);
      current = 0;
    }
  }
  return Math.max(max, current);
}

export { maxConsecutiveOnes };
