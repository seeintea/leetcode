import { makeTree } from "@/utils/binary-tree-node";
import "jest";
import isUnivalTree from "./index";

test("univalued-binary-tree test", () => {
  const testExamples = [
    { root: [1, 1, 1, 1, 1, null, 1], ret: true },
    { root: [2, 2, 2, 5, 2], ret: false },
  ];

  testExamples.forEach(({ root, ret }) => {
    expect(isUnivalTree(makeTree(root))).toBe(ret);
  });
});
