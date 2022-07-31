/**
 * https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/
 * 给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。
 * 请返回层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。
 */
import { TreeNode } from "@/utils/binary-tree-node";

function maxLevelSum(root: TreeNode): number {
  let ret = 1;
  let recordLevel = 0;
  let recordMax = -Infinity;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    recordLevel += 1;
    let current = 0;
    let levelValue = 0;
    while (current < len) {
      const node = queue.shift()!;
      const { val, left, right } = node;
      levelValue += val;
      if (left) queue.push(left);
      if (right) queue.push(right);
      current += 1;
    }
    if (recordMax < levelValue) {
      recordMax = levelValue;
      ret = recordLevel;
    }
  }
  return ret;
}

export default maxLevelSum;
