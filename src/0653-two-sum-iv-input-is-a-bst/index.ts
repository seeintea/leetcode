import { TreeNode } from "@/utils/binary-tree-node";
/**
 * https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
 * 两数之和 IV - 输入 BST
 * 给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
 */

function bfsFindTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set();
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;
    const { val, left, right } = node;
    if (set.has(k - val)) {
      return true;
    }
    set.add(val);
    if (left) queue.push(left);
    if (right) queue.push(right);
  }
  return false;
}

function dfsHelper(root: TreeNode | null, k: number, set: Set<number>): boolean {
  if (!root) return false;
  const { val, left, right } = root;
  if (set.has(k - val)) return true;
  set.add(val);
  return dfsHelper(left, k, set) || dfsHelper(right, k, set);
}

function dfsFindTarget(root: TreeNode | null, k: number): boolean {
  if (!root) return false;
  const set: Set<number> = new Set();
  const { val, left, right } = root;
  set.add(val);
  return dfsHelper(left, k, set) || dfsHelper(right, k, set);
}

export { bfsFindTarget, dfsFindTarget };
