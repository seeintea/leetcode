import "jest";
import smallestRangeI from "./index";

test("smallest-range-i test", () => {
  const testExamples = [
    { nums: [1], k: 0, ret: 0 },
    { nums: [3, 1, 10], k: 4, ret: 1 },
  ];

  testExamples.forEach(({ nums, k, ret }) => {
    expect(smallestRangeI(nums, k)).toBe(ret);
  });
});
