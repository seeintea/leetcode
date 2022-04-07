import "jest";
import rotateString from "./index";

test("rotate-string test", () => {
  const testExamples = [
    { s: "abcde", goal: "cdeab", ret: true },
    { s: "abcde", goal: "abced", ret: false },
  ];

  testExamples.forEach(({ s, goal, ret }) => {
    expect(rotateString(s, goal)).toBe(ret);
  });
});
