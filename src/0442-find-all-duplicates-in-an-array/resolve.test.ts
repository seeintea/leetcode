import "jest";
import findDuplicates from "./index";

test("find-all-duplicates-in-an-array test", () => {
  const testExamples = [
    { nums: [4, 3, 2, 7, 8, 2, 3, 1], ret: [2, 3] },
    { nums: [1, 1, 2], ret: [1] },
    { nums: [1], ret: [] },
  ];

  testExamples.forEach(({ nums, ret }) => {
    expect(findDuplicates(nums)).toStrictEqual(ret);
  });
});
