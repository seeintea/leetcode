import "jest";
import canIWin from "./index";

test("can-i-win test", () => {
  const testExamples = [
    { maxChoosableInteger: 10, desiredTotal: 11, ret: false },
    { maxChoosableInteger: 10, desiredTotal: 0, ret: true },
    { maxChoosableInteger: 10, desiredTotal: 1, ret: true },
    { maxChoosableInteger: 10, desiredTotal: 40, ret: false },
  ];

  testExamples.forEach(({ maxChoosableInteger, desiredTotal, ret }) => {
    expect(canIWin(maxChoosableInteger, desiredTotal)).toBe(ret);
  });
});
