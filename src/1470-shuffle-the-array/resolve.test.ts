import "jest";
import shuffle from "./index";

test("shuffle-the-array test", () => {
  const testExamples = [
    { nums: [2, 5, 1, 3, 4, 7], n: 3, ret: [2, 3, 5, 4, 1, 7] },
    { nums: [1, 2, 3, 4, 4, 3, 2, 1], n: 4, ret: [1, 4, 2, 3, 3, 2, 4, 1] },
  ];

  testExamples.forEach(({ nums, n, ret }) => {
    expect(shuffle(nums, n)).toStrictEqual(ret);
  });
});
