import "jest";
import uniqueMorseRepresentations from "./index";

test("unique-morse-code-words test", () => {
  const testExamples = [
    { words: ["gin", "zen", "gig", "msg"], ret: 2 },
    { words: ["a"], ret: 1 },
  ];

  testExamples.forEach(({ words, ret }) => {
    expect(uniqueMorseRepresentations(words)).toBe(ret);
  });
});
