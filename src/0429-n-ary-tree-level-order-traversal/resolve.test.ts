import "jest";
import { makeTree } from "@/utils/n-ary-tree-node";
import levelOrder from "./index";

test("n-ary-tree-level-order-traversal test", () => {
  const testExamples = [
    { root: [1, null, 3, 2, 4, null, 5, 6], ret: [[1], [3, 2, 4], [5, 6]] },
    {
      root: [
        1,
        null,
        2,
        3,
        4,
        5,
        null,
        null,
        6,
        7,
        null,
        8,
        null,
        9,
        10,
        null,
        null,
        11,
        null,
        12,
        null,
        13,
        null,
        null,
        14,
      ],
      ret: [[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]],
    },
  ];

  testExamples.forEach(({ root, ret }) => {
    const node = makeTree(root);
    expect(levelOrder(node)).toStrictEqual(ret);
  });
});
