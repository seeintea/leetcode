import "jest";
import nextGreatestLetter from "./index";

test("find-smallest-letter-greater-than-target test", () => {
  const testExamples = [
    { letters: ["a", "b"], target: "z", ret: "a" },
    { letters: ["c", "f", "j"], target: "a", ret: "c" },
    { letters: ["c", "f", "j"], target: "c", ret: "f" },
    { letters: ["c", "f", "j"], target: "d", ret: "f" },
  ];

  testExamples.forEach(({ letters, target, ret }) => {
    expect(nextGreatestLetter(letters, target)).toBe(ret);
  });
});
