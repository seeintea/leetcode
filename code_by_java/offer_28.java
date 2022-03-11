public class offer_28 {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * 对称的二叉树
     * 链接：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
     * @param root 根节点
     * @return 是否对称
     */
    public boolean isSymmetric(TreeNode root) {
        if(root == null) {
            return true;
        }
        return recur(root.left, root.right);
    }

    boolean recur(TreeNode left, TreeNode right) {
        if(left == null && right == null) {
            return true;
        }
        if(left == null || right == null || left.val != right.val) {
            return false;
        }
        return recur(left.left, right.right) && recur(left.right, right.left);
    }
}
