import "jest";
import findMinHeightTrees from "./index";

test("minimum-height-trees test", () => {
  const testExamples = [
    {
      n: 4,
      edges: [
        [1, 0],
        [1, 2],
        [1, 3],
      ],
      ret: [1],
    },
    {
      n: 6,
      edges: [
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 4],
        [5, 4],
      ],
      ret: [3, 4],
    },
  ];

  testExamples.forEach(({ n, edges, ret }) => {
    expect(findMinHeightTrees(n, edges)).toStrictEqual(ret);
  });
});
