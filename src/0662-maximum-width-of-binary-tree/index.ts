/**
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/
 * 给你一棵二叉树的根节点 root ，返回树的 最大宽度 。
 * 树的 最大宽度 是所有层中最大的 宽度 。
 * 每一层的 宽度 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 null 节点，这些 null 节点也计入长度。
 * 题目数据保证答案将会在  32 位 带符号整数范围内。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-width-of-binary-tree
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { TreeNode } from "@/utils/binary-tree-node";

function widthOfBinaryTree(root: TreeNode | null): number {
  let ret = 0;
  if (!root) return ret;
  let saveStore: [TreeNode, bigint][] = [[root, 1n]];
  while (saveStore.length) {
    const tempStore: [TreeNode, bigint][] = [];
    for (const [node, index] of saveStore) {
      const { left, right } = node;
      if (left) tempStore.push([left, index * 2n]);
      if (right) tempStore.push([right, index * 2n + 1n]);
    }
    ret = Math.max(ret, Number(saveStore[saveStore.length - 1][1] - saveStore[0][1] + 1n));
    saveStore = tempStore;
  }
  return ret;
}

export default widthOfBinaryTree;
