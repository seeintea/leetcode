import "jest";
import reorderLogFiles from "./index";

test("reorder-data-in-log-files test", () => {
  const testExamples = [
    {
      logs: ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"],
      ret: ["let1 art can", "let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"],
    },
    {
      logs: ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"],
      ret: ["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"],
    },
    {
      logs: ["j mo", "5 m w", "g 07", "o 2 0", "t q h"],
      ret: ["5 m w", "j mo", "t q h", "g 07", "o 2 0"],
    },
  ];

  testExamples.forEach(({ logs, ret }) => {
    expect(reorderLogFiles(logs)).toStrictEqual(ret);
  });
});
