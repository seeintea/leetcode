import "jest";
import { math, mathIsPrimeOptimize } from "./index";

test("prime-number-of-set-bits-in-binary-representation test", () => {
  const testExamples = [
    { left: 6, right: 10, ret: 4 },
    { left: 10, right: 15, ret: 5 },
  ];

  testExamples.forEach(({ left, right, ret }) => {
    expect(math(left, right)).toBe(ret);
    expect(mathIsPrimeOptimize(left, right)).toBe(ret);
  });
});
