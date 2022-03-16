/* eslint-disable @typescript-eslint/no-non-null-assertion */
class DuLNode {
  keys: Set<string>;
  count: number;
  prev: DuLNode | null;
  next: DuLNode | null;

  constructor(key?: string, count?: number) {
    this.count = count === undefined ? 0 : count;
    this.keys = new Set();
    if (key) {
      this.keys.add(key);
    } else {
      this.keys.add("");
    }
    this.prev = null;
    this.next = null;
  }

  insert(node: DuLNode): DuLNode {
    node.prev = this;
    node.next = this.next;
    node.prev.next = node;
    node.next!.prev = node;
    return node;
  }

  remove() {
    this.prev!.next = this.next;
    this.next!.prev = this.prev;
  }
}

/**
 * https://leetcode-cn.com/problems/all-oone-data-structure
 * 全 O(1) 的数据结构
 * 请你设计一个用于存储字符串计数的数据结构，并能够返回计数最小和最大的字符串。
 * 实现 AllOne 类：
 * AllOne() 初始化数据结构的对象。
 * inc(String key) 字符串 key 的计数增加 1 。如果数据结构中尚不存在 key ，那么插入计数为 1 的 key 。
 * dec(String key) 字符串 key 的计数减少 1 。如果 key 的计数在减少后为 0 ，那么需要将这个 key 从数据结构中删除。测试用例保证：在减少计数前，key 存在于数据结构中。
 * getMaxKey() 返回任意一个计数最大的字符串。如果没有元素存在，返回一个空字符串 "" 。
 * getMinKey() 返回任意一个计数最小的字符串。如果没有元素存在，返回一个空字符串 "" 。
 */
class AllOne {
  root: DuLNode;
  nodes: Map<string, DuLNode>;

  constructor() {
    this.root = new DuLNode();
    this.root.next = this.root;
    this.root.prev = this.root;
    this.nodes = new Map();
  }

  inc(key: string): void {
    if (this.nodes.has(key)) {
      const current = this.nodes.get(key);
      const next = current!.next;
      if (next === this.root || next!.count > current!.count + 1) {
        this.nodes.set(key, current!.insert(new DuLNode(key, current!.count + 1)));
      } else {
        next!.keys.add(key);
        this.nodes.set(key, next!);
      }
      current!.keys.delete(key);
      if (current!.keys.size === 0) {
        current!.remove();
      }
    } else {
      if (this.root.next === this.root || this.root.next!.count > 1) {
        this.nodes.set(key, this.root.insert(new DuLNode(key, 1)));
      } else {
        this.root.next!.keys.add(key);
        this.nodes.set(key, this.root.next!);
      }
    }
  }

  dec(key: string): void {
    const current = this.nodes.get(key);
    if (current!.count === 1) {
      this.nodes.delete(key);
    } else {
      const prev = current!.prev;
      if (prev === this.root || prev!.count < current!.count - 1) {
        this.nodes.set(key, current!.prev!.insert(new DuLNode(key, current!.count - 1)));
      } else {
        prev!.keys.add(key);
        this.nodes.set(key, prev!);
      }
    }
    current!.keys.delete(key);
    if (current!.keys.size === 0) {
      current!.remove();
    }
  }

  getMaxKey(): string {
    if (!this.root.prev) {
      return "";
    }
    let maxKey = "";
    for (const key of this.root.prev.keys) {
      maxKey = key;
      break;
    }
    return maxKey;
  }

  getMinKey(): string {
    if (!this.root.next) {
      return "";
    }
    let minKey = "";
    for (const key of this.root.next.keys) {
      minKey = key;
      break;
    }
    return minKey;
  }
}

export default AllOne;
