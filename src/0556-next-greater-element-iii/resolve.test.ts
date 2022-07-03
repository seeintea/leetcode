import "jest";
import nextGreaterElement from "./index";

test("next-greater-element-iii test", () => {
  const testExamples = [
    { n: 12, ret: 21 },
    { n: 21, ret: -1 },
  ];

  testExamples.forEach(({ n, ret }) => {
    expect(nextGreaterElement(n)).toBe(ret);
  });
});
