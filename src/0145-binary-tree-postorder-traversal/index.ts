/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * Binary Tree Postorder Traversal
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */

import { TreeNode } from "@/utils/binary-tree-node";

function postorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  let node = root;
  const stack = [];
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      ret.push(node.val);
      node = node.right;
    }
    node = stack.pop()!;
    node = node.left;
  }
  return ret.reverse();
}

function postorderTraversalRecursion(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const recursion = (node: TreeNode | null) => {
    if (node) {
      const { val, left, right } = node;
      recursion(left);
      recursion(right);
      ret.push(val);
    }
  };
  recursion(root);
  return ret;
}

export { postorderTraversal, postorderTraversalRecursion };
