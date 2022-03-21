import "jest";
import longestWord from "./index";

test("longest-word-in-dictionary test", () => {
  const tests_iter = [
    { words: ["w", "wo", "wor", "worl", "world"], ret: "world" },
    { words: ["a", "banana", "app", "appl", "ap", "apply", "apple"], ret: "apple" },
  ];

  tests_iter.forEach(({ words, ret }) => {
    expect(longestWord(words)).toBe(ret);
  });
});
