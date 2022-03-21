/**
 * https://leetcode-cn.com/problems/construct-string-from-binary-tree
 * 根据二叉树创建字符串
 * 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。
 * 空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。
 */
import { TreeNode } from "@/utils/binary-tree-node";

function tree2str(root: TreeNode | null): string {
  if (root === null) {
    return "";
  }
  const { val, left, right } = root;
  if (!left && !right) {
    return `${val}`;
  }
  if (!right) {
    return `${val}(${tree2str(left)})`;
  }
  return `${val}(${tree2str(left)})(${tree2str(right)})`;
}

export default tree2str;
