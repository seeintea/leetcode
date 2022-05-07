import "jest";
import minMutation from "./index";

test("minimum-genetic-mutation test", () => {
  const testExamples = [
    { start: "AACCGGTT", end: "AACCGGTA", bank: ["AACCGGTA"], ret: 1 },
    { start: "AACCGGTT", end: "AACCGGTA", bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"], ret: 1 },
    { start: "AAAAACCC", end: "AACCCCCC", bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"], ret: 3 },
  ];

  testExamples.forEach(({ start, end, bank, ret }) => {
    expect(minMutation(start, end, bank)).toBe(ret);
  });
});
