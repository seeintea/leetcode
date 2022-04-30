/**
 * https://leetcode-cn.com/problems/rotate-function/
 * 旋转函数
 * 给定一个长度为 n 的整数数组 nums 。
 * 假设 arrk 是数组 nums 顺时针旋转 k 个位置后的数组，我们定义 nums 的 旋转函数  F 为：
 * F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1]
 * 返回 F(0), F(1), ..., F(n-1)中的最大值 。
 * 生成的测试用例让答案符合 32 位 整数。
 */

function maxRotateFunction(nums: number[]): number {
  let cur = 0;
  const len = nums.length;
  const sumNums = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i < len; i += 1) {
    cur += nums[i] * i;
  }
  let ret = cur;
  for (let i = len - 1; i > 0; i -= 1) {
    cur += sumNums - len * nums[i];
    ret = Math.max(ret, cur);
  }
  return ret;
}

export default maxRotateFunction;
