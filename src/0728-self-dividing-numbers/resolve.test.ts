import "jest";
import selfDividingNumbers from "./index";

test("self-dividing-numbers test", () => {
  const testExamples = [
    { left: 1, right: 22, ret: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22] },
    { left: 47, right: 85, ret: [48, 55, 66, 77] },
  ];

  testExamples.forEach(({ left, right, ret }) => {
    expect(selfDividingNumbers(left, right)).toStrictEqual(ret);
  });
});
