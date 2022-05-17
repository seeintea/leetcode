import "jest";
import isAlienSorted from "./index";

test("verifying-an-alien-dictionary test", () => {
  const testExamples = [
    { words: ["hello", "leetcode"], order: "hlabcdefgijkmnopqrstuvwxyz", ret: true },
    { words: ["word", "world", "row"], order: "worldabcefghijkmnpqstuvxyz", ret: false },
  ];

  testExamples.forEach(({ words, order, ret }) => {
    expect(isAlienSorted(words, order)).toBe(ret);
  });
});
