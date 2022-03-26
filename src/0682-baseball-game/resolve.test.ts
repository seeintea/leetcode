import "jest";
import calPoints from "./index";

test("baseball-game test", () => {
  const testExamples = [
    { ops: ["5", "2", "C", "D", "+"], ret: 30 },
    { ops: ["5", "-2", "4", "C", "D", "9", "+", "+"], ret: 27 },
  ];

  testExamples.forEach(({ ops, ret }) => {
    expect(calPoints(ops)).toBe(ret);
  });
});
