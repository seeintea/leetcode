import "jest";
import RandomizedSet from "./index";

test("insert-delete-getrandom-o1 test", () => {
  const randomizedSet = new RandomizedSet();
  expect(randomizedSet.insert(1)).toBeTruthy();
  expect(randomizedSet.remove(2)).toBeFalsy();
  expect(randomizedSet.insert(2)).toBeTruthy();
  expect(randomizedSet.getRandom().toString()).toMatch(/\d/);
});
