import "jest";
import { makeTree } from "@/utils/n-ary-tree-node";
import { rePreOrder, recursion } from "./index";

test("n-ary-tree-postorder-traversa test", () => {
  const iters = [
    { i: [1, null, 3, 2, 4, null, 5, 6], o: [5, 6, 3, 2, 4, 1] },
    {
      i: [
        1,
        null,
        2,
        3,
        4,
        5,
        null,
        null,
        6,
        7,
        null,
        8,
        null,
        9,
        10,
        null,
        null,
        11,
        null,
        12,
        null,
        13,
        null,
        null,
        14,
      ],
      o: [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1],
    },
  ];

  iters.forEach(({ i, o }) => {
    expect(rePreOrder(makeTree(i))).toStrictEqual(o);
    expect(recursion(makeTree(i))).toStrictEqual(o);
  });
});
