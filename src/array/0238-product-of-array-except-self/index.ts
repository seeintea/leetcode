/**
 * productOfArrayExceptSelf <https://leetcode.cn/problems/product-of-array-except-self/>
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */

function productOfArrayExceptSelf(nums: number[]): number[] {
  const { length } = nums;
  const prefix = [1];
  for (let i = 1; i < nums.length; i += 1) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  const suffix = new Array(length);
  suffix[length - 1] = 1;
  for (let i = length - 2; i >= 0; i -= 1) {
    suffix[i] = nums[i + 1] * suffix[i + 1];
  }
  const ret = new Array(length);
  for (let i = 0; i < length; i += 1) {
    ret[i] = prefix[i] * suffix[i];
  }
  return ret;
}

function productOfArrayExceptSelf1(nums: number[]): number[] {
  const { length } = nums;
  const ret = new Array(length);
  ret[0] = 1;
  for (let i = 1; i < length; i += 1) {
    ret[i] = nums[i - 1] * ret[i - 1];
  }
  let right = 1;
  for (let i = length - 1; i >= 0; i -= 1) {
    ret[i] = ret[i] * right;
    right *= nums[i];
  }
  return ret;
}

export { productOfArrayExceptSelf, productOfArrayExceptSelf1 };
