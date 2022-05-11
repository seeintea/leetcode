import "jest";
import canMouseWin from "./index";

test("cat-and-mouse-ii test", () => {
  const testExamples = [
    {
      grid: ["M.C...F"],
      catJump: 1,
      mouseJump: 4,
      ret: true,
    },
    {
      grid: ["M.C...F"],
      catJump: 1,
      mouseJump: 3,
      ret: false,
    },
  ];

  testExamples.forEach(({ grid, catJump, mouseJump, ret }) => {
    expect(canMouseWin(grid, catJump, mouseJump)).toBe(ret);
  });
});
