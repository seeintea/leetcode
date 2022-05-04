import "jest";
import findTheWinner from "./index";

test("find-the-winner-of-the-circular-game test", () => {
  const testExamples = [
    { n: 5, k: 2, ret: 3 },
    { n: 6, k: 5, ret: 1 },
  ];

  testExamples.forEach(({ n, k, ret }) => {
    expect(findTheWinner(n, k)).toBe(ret);
  });
});
