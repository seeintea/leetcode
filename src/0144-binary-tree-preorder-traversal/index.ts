/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * Binary Tree Preorder Traversal
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */

import { TreeNode } from "@/utils/binary-tree-node";

function preorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  if (!root) return ret;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop()!;
    const { left, right, val } = node;
    ret.push(val);
    if (right) stack.push(right);
    if (left) stack.push(left);
  }
  return ret;
}

function preorderTraversalRecursion(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const recursion = (node: TreeNode | null) => {
    if (node) {
      ret.push(node.val);
      recursion(node.left);
      recursion(node.right);
    }
  };
  recursion(root);
  return ret;
}

export { preorderTraversal, preorderTraversalRecursion };
