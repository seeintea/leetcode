import { TreeNode } from "@/utils/binary-tree-node";

/**
 * https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
 * All Elements in Two Binary Search Trees
 * Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.
 */

const getInOrderValue = (root: TreeNode | null): number[] => {
  const ret: number[] = [];
  const recursion = (node: TreeNode | null) => {
    if (node) {
      const { left, val, right } = node;
      recursion(left);
      ret.push(val);
      recursion(right);
    }
  };
  recursion(root);
  return ret;
};

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const val1 = getInOrderValue(root1);
  const val2 = getInOrderValue(root2);
  const ret = [];
  let root1Len = 0;
  let root2Len = 0;
  let merge = true;
  while (merge) {
    if (root1Len === val1.length) {
      for (let i = root2Len; i < val2.length; i += 1) {
        ret.push(val2[i]);
      }
      merge = false;
    } else if (root2Len === val2.length) {
      for (let i = root1Len; i < val1.length; i += 1) {
        ret.push(val1[i]);
      }
      merge = false;
    } else {
      if (val1[root1Len] < val2[root2Len]) {
        ret.push(val1[root1Len]);
        root1Len += 1;
      } else {
        ret.push(val2[root2Len]);
        root2Len += 1;
      }
    }
  }
  return ret;
}

export default getAllElements;
