import { makeTree } from "@/utils/binary-tree-node";
import "jest";
import getAllElements from "./index";

test("all-elements-in-two-binary-search-trees test", () => {
  const testExamples = [
    { root1: [2, 1, 4], root2: [1, 0, 3], ret: [0, 1, 1, 2, 3, 4] },
    { root1: [1, null, 8], root2: [8, 1], ret: [1, 1, 8, 8] },
  ];

  testExamples.forEach(({ root1, root2, ret }) => {
    expect(getAllElements(makeTree(root1), makeTree(root2))).toStrictEqual(ret);
  });
});
