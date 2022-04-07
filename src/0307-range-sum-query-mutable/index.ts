/**
 * https://leetcode-cn.com/problems/range-sum-query-mutable/
 * 区域和检索 - 数组可修改
 * 给你一个数组 nums ，请你完成两类查询。
 * 其中一类查询要求 更新 数组 nums 下标对应的值
 * 另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 ，其中 left <= right
 * 实现 NumArray 类：
 * NumArray(int[] nums) 用整数数组 nums 初始化对象
 * void update(int index, int val) 将 nums[index] 的值 更新 为 val
 * int sumRange(int left, int right) 返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 （即，nums[left] + nums[left + 1], ..., nums[right]）
 */

class NumArray {
  len: number;
  segmentTree: number[];

  constructor(nums: number[]) {
    this.len = nums.length;
    this.segmentTree = new Array(this.len * 4).fill(0);
    this.build(0, 0, this.len - 1, nums);
  }

  build(node: number, start: number, end: number, nums: number[]) {
    if (start === end) {
      this.segmentTree[node] = nums[start];
      return;
    }
    const mid = start + Math.floor((end - start) / 2);
    this.build(node * 2 + 1, start, mid, nums);
    this.build(node * 2 + 2, mid + 1, end, nums);
    this.segmentTree[node] = this.segmentTree[node * 2 + 1] + this.segmentTree[node * 2 + 2];
  }

  change(index: number, val: number, node: number, start: number, end: number) {
    if (start === end) {
      this.segmentTree[node] = val;
      return;
    }
    const mid = start + Math.floor((end - start) / 2);
    if (index <= mid) {
      this.change(index, val, node * 2 + 1, start, mid);
    } else {
      this.change(index, val, node * 2 + 2, mid + 1, end);
    }
    this.segmentTree[node] = this.segmentTree[node * 2 + 1] + this.segmentTree[node * 2 + 2];
  }

  range(left: number, right: number, node: number, start: number, end: number): number {
    if (left === start && right === end) {
      return this.segmentTree[node];
    }
    const mid = start + Math.floor((end - start) / 2);
    if (right <= mid) {
      return this.range(left, right, node * 2 + 1, start, mid);
    } else if (left > mid) {
      return this.range(left, right, node * 2 + 2, mid + 1, end);
    } else {
      return this.range(left, mid, node * 2 + 1, start, mid) + this.range(mid + 1, right, node * 2 + 2, mid + 1, end);
    }
  }

  update(index: number, val: number): void {
    this.change(index, val, 0, 0, this.len - 1);
  }

  sumRange(left: number, right: number): number {
    return this.range(left, right, 0, 0, this.len - 1);
  }
}

export default NumArray;
