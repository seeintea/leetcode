import "jest";
import { makeTree } from "@/utils/binary-tree-node";
import tree2str from "./index";

test("lconstruct-string-from-binary-tree test", () => {
  const tests_iter = [
    { root: [1, 2, 3, 4], ret: "1(2(4))(3)" },
    { root: [1, 2, 3, null, 4], ret: "1(2()(4))(3)" },
  ];

  tests_iter.forEach(({ root, ret }) => {
    const node = makeTree(root);
    expect(tree2str(node)).toBe(ret);
  });
});
