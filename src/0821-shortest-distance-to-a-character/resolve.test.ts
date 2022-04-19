import "jest";
import shortestToChar from "./index";

test("shortest-distance-to-a-character test", () => {
  const testExamples = [
    { s: "loveleetcode", c: "e", ret: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0] },
    { s: "aaab", c: "b", ret: [3, 2, 1, 0] },
  ];

  testExamples.forEach(({ s, c, ret }) => {
    expect(shortestToChar(s, c)).toStrictEqual(ret);
  });
});
