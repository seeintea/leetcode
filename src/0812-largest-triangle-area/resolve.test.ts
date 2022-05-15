import "jest";
import largestTriangleArea from "./index";

test("largest-triangle-area test", () => {
  const testExamples = [
    {
      points: [
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [2, 0],
      ],
      ret: 2.0,
    },
    {
      points: [
        [1, 0],
        [0, 0],
        [0, 1],
      ],
      ret: 0.5,
    },
  ];

  testExamples.forEach(({ points, ret }) => {
    expect(largestTriangleArea(points)).toBe(ret);
  });
});
