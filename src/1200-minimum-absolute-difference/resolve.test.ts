import "jest";
import minimumAbsDifference from "./index";

test("minimum-absolute-difference test", () => {
  const testExamples = [
    {
      arr: [4, 2, 1, 3],
      ret: [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    { arr: [1, 3, 6, 10, 15], ret: [[1, 3]] },
    {
      arr: [3, 8, -10, 23, 19, -4, -14, 27],
      ret: [
        [-14, -10],
        [19, 23],
        [23, 27],
      ],
    },
  ];

  testExamples.forEach(({ arr, ret }) => {
    expect(minimumAbsDifference(arr)).toStrictEqual(ret);
  });
});
