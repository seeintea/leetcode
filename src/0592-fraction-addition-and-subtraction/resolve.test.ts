import "jest";
import fractionAddition from "./index";

test("fraction-addition-and-subtraction test", () => {
  const testExamples = [
    { expression: "-1/2+1/2", ret: "0/1" },
    { expression: "-1/2+1/2+1/3", ret: "1/3" },
    { expression: "1/3-1/2", ret: "-1/6" },
  ];

  testExamples.forEach(({ expression, ret }) => {
    expect(fractionAddition(expression)).toBe(ret);
  });
});
