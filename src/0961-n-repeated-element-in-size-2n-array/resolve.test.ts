import "jest";
import repeatedNTimes from "./index";

test("n-repeated-element-in-size-2n-array test", () => {
  const testExamples = [
    { nums: [1, 2, 3, 3], ret: 3 },
    { nums: [2, 1, 2, 5, 3, 2], ret: 2 },
  ];

  testExamples.forEach(({ nums, ret }) => {
    expect(repeatedNTimes(nums)).toBe(ret);
  });
});
