/**
 * https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array/
 * 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
 * 请你计算并返回该式的最大值。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function quickSort(nums: number[], start: number, end: number) {
  if (start >= end) return;
  let i = start;
  let j = end;
  const base = nums[i];
  while (i < j) {
    while (i < j && base <= nums[j]) j -= 1;
    if (i < j) nums[i] = nums[j];
    while (i < j && nums[i] <= base) i += 1;
    if (i < j) nums[j] = nums[i];
  }
  nums[i] = base;
  quickSort(nums, start, i - 1);
  quickSort(nums, i + 1, end);
}

function maxProduct(nums: number[]): number {
  const len = nums.length - 1;
  quickSort(nums, 0, len);
  return (nums[len - 1] - 1) * (nums[len] - 1);
}

export default maxProduct;
