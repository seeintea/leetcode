import "jest";
import outerTrees from "./index";

test("erect-the-fence test", () => {
  const testExamples = [
    {
      trees: [
        [1, 1],
        [2, 2],
        [2, 0],
        [2, 4],
        [3, 3],
        [4, 2],
      ],
      ret: [
        [2, 0],
        [4, 2],
        [3, 3],
        [2, 4],
        [1, 1],
      ],
    },
    {
      trees: [
        [1, 2],
        [2, 2],
        [4, 2],
      ],
      ret: [
        [1, 2],
        [2, 2],
        [4, 2],
      ],
    },
  ];

  testExamples.forEach(({ trees, ret }) => {
    expect(outerTrees(trees)).toEqual(ret);
  });
});
