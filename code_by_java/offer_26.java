public class offer_26 {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * 树的子结构
     * 链接：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
     * @param A 判定树
     * @param B 待判定子树
     * @return 判定结果
     */
    public boolean isSubStructure(TreeNode A, TreeNode B) {
        // 空树不是任何树的子数
        if(A == null || B == null) {
            return false;
        }
        return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
    }

    boolean recur(TreeNode t1, TreeNode t2) {
        if(t2 == null) return true;
        if(t1 == null || t1.val != t2.val) return false;
        return recur(t1.left, t2.left) && recur(t1.right, t2.right);
    }

}
