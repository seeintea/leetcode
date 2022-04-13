/**
 * https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 * O(1) 时间插入、删除和获取随机元素
 * 实现RandomizedSet 类：RandomizedSet() 初始化 RandomizedSet 对象
 * bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
 * bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
 * int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
 * 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。
 */

class RandomizedSet {
  nums: number[];
  indices: Map<number, number>;

  constructor() {
    this.nums = [];
    this.indices = new Map();
  }

  insert(val: number): boolean {
    if (this.indices.has(val)) {
      return false;
    }
    const idx = this.nums.length;
    this.nums.push(val);
    this.indices.set(val, idx);
    return true;
  }

  remove(val: number): boolean {
    if (!this.indices.has(val)) {
      return false;
    }
    const idx = this.indices.get(val)!;
    this.nums[idx] = this.nums[this.nums.length - 1];
    this.indices.set(this.nums[idx], idx);
    this.nums.pop();
    this.indices.delete(val);
    return true;
  }

  getRandom(): number {
    const idx = Math.floor(Math.random() * this.nums.length);
    return this.nums[idx];
  }
}

export default RandomizedSet;
