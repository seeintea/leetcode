import "jest";
import maxLevelSum from "./index";
import { makeTree } from "@/utils/binary-tree-node";

test("maximum-level-sum-of-a-binary-tree test", () => {
  const testExamples = [
    { root: [1, 7, 0, 7, -8, null, null], ret: 2 },
    { root: [989, null, 10250, 98693, -89388, null, null, null, -32127], ret: 2 },
    { root: [-100, -200, -300, -20, -5, -10], ret: 3 },
  ];

  testExamples.forEach(({ root, ret }) => {
    expect(maxLevelSum(makeTree(root))).toBe(ret);
  });
});
