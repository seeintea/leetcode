import "jest";
import missingRolls from "./index";

test("find-missing-observations test", () => {
  const testExamples = [
    { rolls: [3, 2, 4, 3], mean: 4, n: 2, ret: [6, 6] },
    { rolls: [1, 5, 6], mean: 3, n: 4, ret: [2, 3, 2, 2] },
    { rolls: [1, 2, 3, 4], mean: 6, n: 4, ret: [] },
    { rolls: [1], mean: 3, n: 1, ret: [5] },
  ];

  testExamples.forEach(({ rolls, mean, n, ret }) => {
    expect(missingRolls(rolls, mean, n).sort()).toStrictEqual(ret.sort());
  });
});
