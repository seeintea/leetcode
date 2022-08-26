import "jest";
import maxProduct from "./index";

test("maximum-product-of-two-elements-in-an-array test", () => {
  const testExamples = [
    { nums: [3, 4, 5, 2], ret: 12 },
    { nums: [1, 5, 4, 5], ret: 16 },
    { nums: [3, 7], ret: 12 },
  ];

  testExamples.forEach(({ nums, ret }) => {
    expect(maxProduct(nums)).toBe(ret);
  });
});
