import "jest";
import findKthNumber from "./index";

test("k-th-smallest-in-lexicographical-order test", () => {
  const testExamples = [
    { n: 13, k: 2, ret: 10 },
    { n: 1, k: 1, ret: 1 },
    { n: 133, k: 13, ret: 11 },
  ];

  testExamples.forEach(({ n, k, ret }) => {
    expect(findKthNumber(n, k)).toBe(ret);
  });
});
