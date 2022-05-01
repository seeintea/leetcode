import "jest";
import { makeTree } from "@/utils/binary-tree-node";
import { inorderTraversal, inorderTraversalRecursion } from "./index";

test("binary-tree-inorder-traversal test", () => {
  const testExamples = [{ root: [1, null, 2, 3], ret: [1, 3, 2] }];

  testExamples.forEach(({ root, ret }) => {
    expect(inorderTraversal(makeTree(root))).toStrictEqual(ret);
    expect(inorderTraversalRecursion(makeTree(root))).toStrictEqual(ret);
  });
});
