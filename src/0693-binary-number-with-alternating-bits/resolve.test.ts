import "jest";
import { simluation, bitwise } from "./index";

test("binary-number-with-alternating-bits test", () => {
  const testExamples = [
    { n: 5, ret: true },
    { n: 7, ret: false },
    { n: 11, ret: false },
  ];

  testExamples.forEach(({ n, ret }) => {
    expect(simluation(n)).toBe(ret);
    expect(bitwise(n)).toBe(ret);
  });
});
