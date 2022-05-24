/**
 * https://leetcode.cn/problems/univalued-binary-tree/
 * Univalued Binary Tree
 * A binary tree is uni-valued if every node in the tree has the same value.
 * Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.
 */

import { TreeNode } from "@/utils/binary-tree-node";

function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return true;
  const cur = root.val;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    const { val, left, right } = node!;
    if (val !== cur) return false;
    if (left) stack.push(left);
    if (right) stack.push(right);
  }
  return true;
}

export default isUnivalTree;
