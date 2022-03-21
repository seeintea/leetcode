import "jest";
import countMaxOrSubsets from "./index";

test("count-number-of-maximum-bitwise-or-subsets test", () => {
  const testExamples = [
    { input: [3, 1], output: 2 },
    { input: [2, 2, 2], output: 7 },
    { input: [3, 2, 1, 5], output: 6 },
  ];

  testExamples.forEach(({ input, output }) => {
    expect(countMaxOrSubsets(input)).toBe(output);
  });
});
