import "jest";
import arrayRankTransform from "./index";

test("rank-transform-of-an-array test", () => {
  const testExamples = [
    { arr: [40, 10, 20, 30], ret: [4, 1, 2, 3] },
    { arr: [100, 100, 100], ret: [1, 1, 1] },
    { arr: [37, 12, 28, 9, 100, 56, 80, 5, 12], ret: [5, 3, 4, 2, 8, 6, 7, 1, 3] },
  ];

  testExamples.forEach(({ arr, ret }) => {
    expect(arrayRankTransform(arr)).toStrictEqual(ret);
  });
});
