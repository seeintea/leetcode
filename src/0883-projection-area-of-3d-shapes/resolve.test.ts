import "jest";
import projectionArea from "./index";

test("projection-area-of-3d-shapes test", () => {
  const testExamples = [
    {
      grid: [
        [1, 2],
        [3, 4],
      ],
      ret: 17,
    },
    { grid: [[2]], ret: 5 },
    {
      grid: [
        [1, 0],
        [0, 2],
      ],
      ret: 8,
    },
  ];

  testExamples.forEach(({ grid, ret }) => {
    expect(projectionArea(grid)).toBe(ret);
  });
});
