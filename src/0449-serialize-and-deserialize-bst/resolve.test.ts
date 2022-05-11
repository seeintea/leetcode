import "jest";
import { serialize, deserialize } from "./index";
import { makeTree, treeToIter } from "@/utils/binary-tree-node";

test("serialize-and-deserialize-bst test", () => {
  const testExamples = [{ root: [2, 1, 3], ret: [2, 1, 3] }];

  testExamples.forEach(({ root, ret }) => {
    expect(treeToIter(deserialize(serialize(makeTree(root)))!)).toStrictEqual(ret);
  });
});
