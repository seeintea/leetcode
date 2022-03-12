import "jest";
import { makeTree, treeToIter } from "../n-ary-tree-node";

test("n-ary-tree node utils", () => {
  const iters = [
    { i: [1, null, 3, 2, 4, null, 5, 6], o: [1, null, 3, 2, 4, null, 5, 6] },
    {
      i: [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11],
      o: [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11],
    },
    { i: [1, null, null, 2, 3, 4], o: [1] },
  ];
  iters.forEach(({ i, o }) => {
    const tree = makeTree(i);
    expect(treeToIter(tree)).toStrictEqual(o);
  });
});
