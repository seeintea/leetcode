import java.util.Stack;

public class offer_27 {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * 二叉树的镜像
     * 链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
     * @param root 根节点
     * @return 镜像节点
     */
    public TreeNode mirrorTree(TreeNode root) {
        if(root == null) {
            return null;
        }
        TreeNode leftNode = root.left;
        root.left = mirrorTree(root.right);
        root.right = mirrorTree(leftNode);
        return root;
    }

    public TreeNode _mirrorTree(TreeNode root) {
        if(root == null) {
            return null;
        }
        Stack<TreeNode> stack = new Stack<>();
        stack.add(root);

        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            if(node.left != null) {
                stack.add(node.left);
            }
            if(node.right != null) {
                stack.add(node.right);
            }
            TreeNode temp = node.left;
            node.left= node.right;
            node.right = temp;
        }
        return root;
    }

}
