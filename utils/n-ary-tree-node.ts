import { IterNode } from "@/types/common";

class Node {
  val: number;
  children: Node[];

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

const makeTree = (iter: IterNode<number>[]): Node => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ret = new Node(iter[0]!);
  const queue: Node[] = [ret];
  const len = iter.length;
  let ptr = 2; // iter[1] === null
  while (0 < queue.length) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const node = queue.shift()!;
    const children: Node[] = [];
    while (ptr < len && iter[ptr] !== null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const childNode: Node = new Node(iter[ptr]!);
      children.push(childNode);
      ptr += 1;
    }
    ptr += 1;
    node.children = children;
    queue.push(...children);
  }
  return ret;
};

const treeToIter = (node: Node): IterNode<number>[] => {
  const ret: IterNode<number>[] = [];
  let queue: IterNode<IterNode<Node>[]>[] = [[node]];

  while (0 < queue.length) {
    const childs = queue.shift() || null;
    if (childs === null) {
      ret.push(null);
      continue;
    }
    childs.forEach((child) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { val, children } = child!;
      ret.push(val);
      if (children.length > 0) {
        queue.push(children);
      } else {
        queue.push(null);
      }
    });
    if (queue.some((q) => q !== null)) {
      ret.push(null);
    } else {
      queue = [];
    }
  }
  return ret;
};

export { Node, makeTree, treeToIter };
