import { makeTree } from "@/utils/binary-tree-node";
import "jest";
import widthOfBinaryTree from "./index";

test("maximum-width-of-binary-tree test", () => {
  const testExamples = [
    { root: [1, 3, 2, 5, null, null, 9, 6, null, 7], ret: 7 },
    { root: [1, 3, 2, 5], ret: 2 },
    { root: [1, 3, 2, 5, 3, null, 9], ret: 4 },
  ];

  testExamples.forEach(({ root, ret }) => {
    expect(widthOfBinaryTree(makeTree(root))).toBe(ret);
  });
});
