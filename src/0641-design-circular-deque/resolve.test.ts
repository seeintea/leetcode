import "jest";
import MyCircularDeque from "./index";

test("design-circular-deque test", () => {
  const deque = new MyCircularDeque(3);
  expect(deque.insertLast(1)).toBeTruthy();
  expect(deque.insertLast(2)).toBeTruthy();
  expect(deque.insertFront(3)).toBeTruthy();
  expect(deque.insertFront(4)).toBeFalsy();
  expect(deque.getRear()).toBe(2);
  expect(deque.isFull()).toBeTruthy();
  expect(deque.deleteLast()).toBeTruthy();
  expect(deque.insertFront(4)).toBeTruthy();
  expect(deque.getFront()).toBe(4);
  expect(deque.deleteFront()).toBeTruthy();
});
