/**
 * https://leetcode.cn/problems/design-circular-deque/
 *  设计实现双端队列。
 * 实现 MyCircularDeque 类:
 * MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
 * boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
 * boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
 * boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
 * boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
 * int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
 * int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
 * boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
 * boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/design-circular-deque
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class MyCircularDeque {
  head: number;
  tail: number;
  current: number;
  total: number;
  numbers: number[];

  constructor(k: number) {
    this.head = 0;
    this.tail = 0;
    this.current = 0;
    this.total = k;
    this.numbers = [];
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    this.head = (this.head + this.total - 1) % this.total;
    this.numbers[this.head] = value;
    this.current += 1;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.numbers[this.tail] = value;
    this.tail += 1;
    this.tail %= this.total;
    this.current += 1;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.total;
    this.current -= 1;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.tail = (this.tail + this.total - 1) % this.total;
    this.current -= 1;
    return true;
  }

  getFront(): number {
    return this.isEmpty() ? -1 : this.numbers[this.head];
  }

  getRear(): number {
    return this.isEmpty() ? -1 : this.numbers[(this.tail + this.total - 1) % this.total];
  }

  isEmpty(): boolean {
    return this.current === 0;
  }

  isFull(): boolean {
    return this.current == this.total;
  }
}

export default MyCircularDeque;
