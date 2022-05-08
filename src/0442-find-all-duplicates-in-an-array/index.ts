/**
 * https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
 * Find All Duplicates in an Array
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
 * You must write an algorithm that runs in O(n) time and uses only constant extra space.
 */

function findDuplicates(nums: number[]): number[] {
  const len = nums.length;
  const ret = [];
  for (let i = 0; i < len; i += 1) {
    const val = Math.abs(nums[i]);
    if (nums[val - 1] > 0) {
      nums[val - 1] = -nums[val - 1];
    } else {
      ret.push(val);
    }
  }
  return ret;
}

export default findDuplicates;
