import "jest";
import isPrefixOfWord from "./index";

test("check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence test", () => {
  const testExamples = [
    { sentence: "i love eating burger", searchWord: "burg", ret: 4 },
    { sentence: "this problem is an easy problem", searchWord: "pro", ret: 2 },
    { sentence: "i am tired", searchWord: "you", ret: -1 },
  ];

  testExamples.forEach(({ sentence, searchWord, ret }) => {
    expect(isPrefixOfWord(sentence, searchWord)).toBe(ret);
  });
});
