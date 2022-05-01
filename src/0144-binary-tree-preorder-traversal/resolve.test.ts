import "jest";
import { makeTree } from "@/utils/binary-tree-node";
import { preorderTraversal, preorderTraversalRecursion } from "./index";

test("binary-tree-preorder-traversal test", () => {
  const testExamples = [{ root: [1, null, 2, 3], ret: [1, 2, 3] }];

  testExamples.forEach(({ root, ret }) => {
    expect(preorderTraversal(makeTree(root))).toStrictEqual(ret);
    expect(preorderTraversalRecursion(makeTree(root))).toStrictEqual(ret);
  });
});
