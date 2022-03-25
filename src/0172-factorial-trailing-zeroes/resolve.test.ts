import "jest";
import trailingZeroes from "./index";

test("factorial-trailing-zeroes test", () => {
  const testExamples = [
    { n: 3, ret: 0 },
    { n: 5, ret: 1 },
  ];

  testExamples.forEach(({ n, ret }) => {
    expect(trailingZeroes(n)).toBe(ret);
  });
});
