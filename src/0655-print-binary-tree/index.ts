/**
 * https://leetcode.cn/problems/print-binary-tree/
 * 给你一棵二叉树的根节点 root ，请你构造一个下标从 0 开始、大小为 m x n 的字符串矩阵 res ，用以表示树的 格式化布局 。构造此格式化布局矩阵需要遵循以下规则：
 * 树的 高度 为 height ，矩阵的行数 m 应该等于 height + 1 。
 * 矩阵的列数 n 应该等于 2height+1 - 1 。
 * 根节点 需要放置在 顶行 的 正中间 ，对应位置为 res[0][(n-1)/2] 。
 * 对于放置在矩阵中的每个节点，设对应位置为 res[r][c] ，将其左子节点放置在 res[r+1][c-2height-r-1] ，右子节点放置在 res[r+1][c+2height-r-1] 。
 * 继续这一过程，直到树中的所有节点都妥善放置。
 * 任意空单元格都应该包含空字符串 "" 。
 * 返回构造得到的矩阵 res 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/print-binary-tree
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { TreeNode } from "@/utils/binary-tree-node";

function getTreeDeep(root: TreeNode): number {
  let h = 0;
  const { left, right } = root;
  if (left) {
    h = Math.max(h, getTreeDeep(left) + 1);
  }
  if (right) {
    h = Math.max(h, getTreeDeep(right) + 1);
  }
  return h;
}

function getPositionVal(ret: string[][], root: TreeNode, row: number, col: number, height: number): void {
  const { val, left, right } = root;
  ret[row][col] = val.toString();
  if (left) {
    getPositionVal(ret, left, row + 1, col - (1 << (height - row - 1)), height);
  }
  if (right) {
    getPositionVal(ret, right, row + 1, col + (1 << (height - row - 1)), height);
  }
}

function printTree(root: TreeNode | null): string[][] {
  let ret: string[][] = [];
  if (!root) return ret;
  const height = getTreeDeep(root);
  const row = height + 1;
  const col = (1 << (height + 1)) - 1;
  ret = new Array(row).fill(0).map((_) => new Array(col).fill(""));
  getPositionVal(ret, root, 0, Math.floor((col - 1) / 2), height);
  return ret;
}

export default printTree;
