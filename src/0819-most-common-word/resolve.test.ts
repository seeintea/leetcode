import "jest";
import mostCommonWord from "./index";

test("most-common-word test", () => {
  const testExamples = [
    { paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.", banned: ["hit"], ret: "ball" },
    { paragraph: "Bob", banned: [], ret: "bob" },
  ];

  testExamples.forEach(({ paragraph, banned, ret }) => {
    expect(mostCommonWord(paragraph, banned)).toBe(ret);
  });
});
