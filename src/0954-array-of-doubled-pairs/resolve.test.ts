import "jest";
import canReorderDoubled from "./index";

test("array-of-doubled-pairs test", () => {
  const testExamples = [
    { arr: [3, 1, 3, 6], ret: false },
    { arr: [2, 1, 2, 6], ret: false },
    { arr: [4, -2, 2, -4], ret: true },
  ];

  testExamples.forEach(({ arr, ret }) => {
    expect(canReorderDoubled(arr)).toBe(ret);
  });
});
