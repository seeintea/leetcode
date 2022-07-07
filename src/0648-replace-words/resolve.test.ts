import "jest";
import replaceWords from "./index";

test("replace-words test", () => {
  const testExamples = [
    {
      dictionary: ["cat", "bat", "rat"],
      sentence: "the cattle was rattled by the battery",
      ret: "the cat was rat by the bat",
    },
    {
      dictionary: ["a", "b", "c"],
      sentence: "aadsfasf absbs bbab cadsfafs",
      ret: "a a b c",
    },
  ];

  testExamples.forEach(({ dictionary, sentence, ret }) => {
    expect(replaceWords(dictionary, sentence)).toBe(ret);
  });
});
