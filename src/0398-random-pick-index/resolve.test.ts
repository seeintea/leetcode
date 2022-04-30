import "jest";
import Solution from "./index";

test("random-pick-index test", () => {
  const solution = new Solution([1, 2, 3, 3, 3]);
  expect(solution.pick(3) > 0).toBeTruthy();
  expect(solution.pick(1) === 0).toBeTruthy();
});
