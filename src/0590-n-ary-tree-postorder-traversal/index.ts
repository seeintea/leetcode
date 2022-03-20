/**
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversa
 * N叉树的后序遍历
 * 给定一个n叉树的根节点root，返回 其节点值的 后序遍历。
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔。
 */

import { Node } from "@/utils/n-ary-tree-node";

// 反转前序遍历
const rePreOrder = (root: Node | null): number[] => {
  const stack: (Node | number | null)[] = [root];
  const ret = [];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node === null || node === undefined) continue;
    if (typeof node === "number") {
      ret.push(node);
    } else {
      stack.push(...node.children, node.val);
    }
  }
  return ret.reverse();
};

const recursionHelper = (root: Node | null, ret: number[]) => {
  if (root === null) {
    return;
  }
  const { val, children } = root;
  children.forEach((child) => {
    recursionHelper(child, ret);
  });
  ret.push(val);
};

//  递归
const recursion = (root: Node | null): number[] => {
  const ret: number[] = [];
  recursionHelper(root, ret);
  return ret;
};

export { rePreOrder, recursion };
