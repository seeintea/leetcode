import "jest";
import { makeTree } from "@/utils/binary-tree-node";
import { bfsFindTarget, dfsFindTarget } from "./index";

test("two-sum-iv-input-is-a-bst test", () => {
  const testExamples = [
    { root: [5, 3, 6, 2, 4, null, 7], k: 9, ret: true },
    { root: [5, 3, 6, 2, 4, null, 7], k: 28, ret: false },
  ];

  testExamples.forEach(({ root, k, ret }) => {
    const node = makeTree(root);
    expect(bfsFindTarget(node, k)).toBe(ret);
    expect(dfsFindTarget(node, k)).toBe(ret);
  });
});
