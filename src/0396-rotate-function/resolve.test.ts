import "jest";
import maxRotateFunction from "./index";

test("rotate-function test", () => {
  const testExamples = [
    { nums: [4, 3, 2, 6], ret: 26 },
    { nums: [100], ret: 0 },
  ];

  testExamples.forEach(({ nums, ret }) => {
    expect(maxRotateFunction(nums)).toBe(ret);
  });
});
