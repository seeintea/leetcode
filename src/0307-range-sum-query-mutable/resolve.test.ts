import "jest";
import NumArray from "./index";

test("range-sum-query-mutable test", () => {
  const numArray = new NumArray([1, 3, 5]);
  expect(numArray.sumRange(0, 2)).toBe(9);
  numArray.update(1, 2);
  expect(numArray.sumRange(0, 2)).toBe(8);
});
