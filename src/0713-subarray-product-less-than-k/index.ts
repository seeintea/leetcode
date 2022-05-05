/**
 * https://leetcode-cn.com/problems/subarray-product-less-than-k/
 * Subarray Product Less Than K
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const len = nums.length;
  let ret = 0;
  let cur = 1;
  let idx = 0;
  for (let i = 0; i < len; i += 1) {
    cur *= nums[i];
    while (idx <= i && cur >= k) {
      cur /= nums[idx];
      idx += 1;
    }
    ret += i - idx + 1;
  }
  return ret;
}

export default numSubarrayProductLessThanK;
