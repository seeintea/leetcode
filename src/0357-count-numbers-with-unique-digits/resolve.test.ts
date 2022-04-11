import "jest";
import countNumbersWithUniqueDigits from "./index";

test("count-numbers-with-unique-digits test", () => {
  const testExamples = [
    { n: 2, ret: 91 },
    { n: 0, ret: 1 },
  ];

  testExamples.forEach(({ n, ret }) => {
    expect(countNumbersWithUniqueDigits(n)).toBe(ret);
  });
});
