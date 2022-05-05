import "jest";
import numSubarrayProductLessThanK from "./index";

test("subarray-product-less-than-k test", () => {
  const testExamples = [
    { nums: [10, 5, 2, 6], k: 100, ret: 8 },
    { nums: [10, 5, 2, 6], k: 0, ret: 0 },
  ];

  testExamples.forEach(({ nums, k, ret }) => {
    expect(numSubarrayProductLessThanK(nums, k)).toBe(ret);
  });
});
