import "jest";
import reachingPoints from "./index";

test("reaching-points test", () => {
  const testExamples = [
    { sx: 1, sy: 1, tx: 3, ty: 5, ret: true },
    { sx: 1, sy: 1, tx: 2, ty: 2, ret: false },
    { sx: 1, sy: 1, tx: 1, ty: 1, ret: true },
  ];

  testExamples.forEach(({ sx, sy, tx, ty, ret }) => {
    expect(reachingPoints(sx, sy, tx, ty)).toBe(ret);
  });
});
