import { makeTree } from "@/utils/binary-tree-node";
import "jest";
import printTree from "./index";

test("print-binary-tree test", () => {
  const testExamples = [
    {
      root: [1, 2],
      ret: [
        ["", "1", ""],
        ["2", "", ""],
      ],
    },
    {
      root: [1, 2, 3, null, 4],
      ret: [
        ["", "", "", "1", "", "", ""],
        ["", "2", "", "", "", "3", ""],
        ["", "", "4", "", "", "", ""],
      ],
    },
  ];

  testExamples.forEach(({ root, ret }) => {
    expect(printTree(makeTree(root))).toStrictEqual(ret);
  });
});
