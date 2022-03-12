import "jest";
import { makeTree, treeToIter } from "../binary-tree-node";

test("binary-tree node utils", () => {
  const iters = [
    { i: [1, null, 2, null, 3], o: [1, null, 2, null, 3] },
    { i: [1, 2, 3, 4, 5, 6, 7], o: [1, 2, 3, 4, 5, 6, 7] },
    { i: [1, null, null, 2, 3, 4], o: [1] },
  ];
  iters.forEach(({ i, o }) => {
    const tree = makeTree(i);
    expect(treeToIter(tree)).toStrictEqual(o);
  });
});
