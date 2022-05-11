/**
 * https://leetcode.cn/problems/serialize-and-deserialize-bst/
 * Serialize and Deserialize BST
 * Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
 * The encoded string should be as compact as possible.
 */

/*
 * Encodes a tree to a single string.
 */
import { TreeNode } from "@/utils/binary-tree-node";

function serialize(root: TreeNode | null): string {
  const list: number[] = [];
  const postorder = (node: TreeNode | null) => {
    if (!node) return;
    const { left, right, val } = node;
    postorder(left);
    postorder(right);
    list.push(val);
  };
  postorder(root);
  return list.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data.length === 0) return null;
  const args: number[] = data.split(",").map((item) => parseInt(item));
  const construct = (lower: number, upper: number, stack: number[]) => {
    if (stack.length === 0 || stack[stack.length - 1] < lower || stack[stack.length - 1] > upper) {
      return null;
    }
    const val = stack.pop()!;
    const root = new TreeNode(val);
    root.right = construct(val, upper, stack);
    root.left = construct(lower, val, stack);
    return root;
  };
  return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, args);
}

export { serialize, deserialize };
