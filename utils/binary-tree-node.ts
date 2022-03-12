import { IterNode } from "@/types/common";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const makeTree = (iter: IterNode<number>[]): TreeNode => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ret = new TreeNode(iter[0]!);
  let ptr = 1;
  const len = iter.length;
  const stack: IterNode<TreeNode>[] = [ret];

  while (0 < stack.length && ptr < len) {
    const node = stack.pop();
    if (node == null) {
      continue;
    }
    const leftVal = iter[ptr];
    const leftNode = leftVal === null ? null : new TreeNode(leftVal);
    ptr += 1;
    let rightNode = null;
    if (ptr < len) {
      const rightVal = iter[ptr];
      rightNode = rightVal === null ? null : new TreeNode(rightVal);
      ptr += 1;
    }
    node.left = leftNode;
    node.right = rightNode;
    stack.push(rightNode, leftNode);
  }
  return ret;
};

const treeToIter = (treeNode: TreeNode): IterNode<number>[] => {
  const ret: IterNode<number>[] = [];
  const queue: IterNode<TreeNode>[] = [treeNode];
  while (0 < queue.length) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const node: IterNode<TreeNode> = queue.shift()!;
    if (node === null) {
      ret.push(null);
      continue;
    }
    const { val, left, right } = node;
    ret.push(val);
    if (left || right) {
      queue.push(left, right);
    }
  }
  return ret;
};

export { TreeNode, makeTree, treeToIter };
