/**
 * rotateArray <https://leetcode.cn/problems/rotate-array/>
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */

function rotateArray(nums: number[], k: number): void {
  const { length } = nums;
  while (k) {
    let nextItem = nums[length - 1];
    for (let i = 0; i < length; i += 1) {
      const curItem = nums[i];
      nums[i] = nextItem;
      nextItem = curItem;
    }
    k -= 1;
  }
}

function rotateArray1(nums: number[], k: number): void {
  const copy = [...nums];
  const { length } = nums;
  const position = k % length;
  for (let i = 0; i < length; i += 1) {
    if (i < position) {
      nums[i] = copy[length - position + i];
    } else {
      nums[i] = copy[i - position];
    }
  }
}

function rotateArray2(nums: number[], k: number): void {
  const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x);
  const { length } = nums;
  k = k % length;
  const count = gcd(k, length);
  for (let start = 0; start < count; start += 1) {
    let current = start;
    let prev = nums[start];
    do {
      const next = (current + k) % length;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
    } while (start !== current);
  }
}

function rotateArray3(nums: number[], k: number): void {
  const reverse = (nums: number[], start: number, end: number) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start += 1;
      end -= 1;
    }
  };

  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

export { rotateArray, rotateArray1, rotateArray2, rotateArray3 };
