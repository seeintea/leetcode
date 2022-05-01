import "jest";
import { makeTree } from "@/utils/binary-tree-node";
import { postorderTraversal, postorderTraversalRecursion } from "./index";

test("binary-tree-postorder-traversal test", () => {
  const testExamples = [{ root: [1, null, 2, 3], ret: [3, 2, 1] }];

  testExamples.forEach(({ root, ret }) => {
    expect(postorderTraversal(makeTree(root))).toStrictEqual(ret);
    expect(postorderTraversalRecursion(makeTree(root))).toStrictEqual(ret);
  });
});
