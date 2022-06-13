import "jest";
import heightChecker from "./index";

test("height-checker test", () => {
  const testExamples = [
    { heights: [1, 1, 4, 2, 1, 3], ret: 3 },
    { heights: [5, 1, 2, 3, 4], ret: 5 },
  ];

  testExamples.forEach(({ heights, ret }) => {
    expect(heightChecker(heights)).toBe(ret);
  });
});
