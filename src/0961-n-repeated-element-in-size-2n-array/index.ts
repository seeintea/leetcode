/**
 * https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/
 * N-Repeated Element in Size 2N Array
 * You are given an integer array nums with the following properties:
 * nums.length == 2 * n.
 * nums contains n + 1 unique elements.
 * Exactly one element of nums is repeated n times.
 * Return the element that is repeated n times.
 */

function repeatedNTimes(nums: number[]): number {
  const len = nums.length;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const x = Math.floor(Math.random() * len);
    const y = Math.floor(Math.random() * len);
    if (x !== y && nums[x] === nums[y]) {
      return nums[x];
    }
  }
}

export default repeatedNTimes;
