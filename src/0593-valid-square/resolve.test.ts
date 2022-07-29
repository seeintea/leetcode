import "jest";
import validSquare from "./index";

test("valid-square test", () => {
  const testExamples = [
    {
      p1: [0, 0],
      p2: [1, 1],
      p3: [1, 0],
      p4: [0, 1],
      ret: true,
    },
    {
      p1: [0, 0],
      p2: [1, 1],
      p3: [1, 0],
      p4: [0, 12],
      ret: false,
    },
    {
      p1: [1, 0],
      p2: [-1, 0],
      p3: [0, 1],
      p4: [0, -1],
      ret: true,
    },
  ];

  testExamples.forEach(({ p1, p2, p3, p4, ret }) => {
    expect(validSquare(p1, p2, p3, p4)).toBe(ret);
  });
});
