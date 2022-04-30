import "jest";
import binaryGap from "./index";

test("binary-gap test", () => {
  const testExamples = [
    { n: 22, ret: 2 },
    { n: 8, ret: 0 },
  ];

  testExamples.forEach(({ n, ret }) => {
    expect(binaryGap(n)).toBe(ret);
  });
});
