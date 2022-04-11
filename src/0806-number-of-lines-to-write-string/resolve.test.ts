import "jest";
import numberOfLines from "./index";

test("number-of-lines-to-write-string test", () => {
  const testExamples = [
    {
      widths: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      S: "abcdefghijklmnopqrstuvwxyz",
      ret: [3, 60],
    },
    {
      widths: [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      S: "bbbcccdddaaa",
      ret: [2, 4],
    },
  ];

  testExamples.forEach(({ widths, S, ret }) => {
    expect(numberOfLines(widths, S)).toStrictEqual(ret);
  });
});
