import "jest";
import winnerOfGame from "./index";

test("remove-colored-pieces-if-both-neighbors-are-the-same-color", () => {
  const testExamples = [
    {
      colors: "AAABABB",
      ret: true,
    },
    {
      colors: "AA",
      ret: false,
    },
    {
      colors: "ABBBBBBAAA",
      ret: false,
    },
  ];

  testExamples.forEach(({ colors, ret }) => {
    expect(winnerOfGame(colors)).toBe(ret);
  });
});
