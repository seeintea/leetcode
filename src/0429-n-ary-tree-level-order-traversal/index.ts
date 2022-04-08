/**
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * N 叉树的层序遍历
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 * 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
 */

import { Node } from "@/utils/n-ary-tree-node";

function levelOrder(root: Node | null): number[][] {
  const ret: number[][] = [];
  if (!root) return ret;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    let idx = 0;
    const subRet = [];
    while (idx < len) {
      idx += 1;
      const node = queue.shift()!;
      const { val, children } = node;
      subRet.push(val);
      queue.push(...children);
    }
    ret.push(subRet);
  }
  return ret;
}

export default levelOrder;
