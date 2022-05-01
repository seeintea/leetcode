/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * Binary Tree Inorder Traversal
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

import { TreeNode } from "@/utils/binary-tree-node";

function inorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  if (!root) return ret;
  const stack = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left!;
    }
    node = stack.pop()!;
    ret.push(node.val);
    node = node.right!;
  }
  return ret;
}

function inorderTraversalRecursion(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const recursion = (node: TreeNode | null) => {
    if (node) {
      const { val, left, right } = node;
      recursion(left);
      ret.push(val);
      recursion(right);
    }
  };
  recursion(root);
  return ret;
}

export { inorderTraversal, inorderTraversalRecursion };
