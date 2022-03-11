import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class offer_32_I {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * 从上到下打印二叉树
     * 链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
     * @param root 根节点
     * @return 层次遍历结果
     */
    public int[] levelOrder(TreeNode root) {
        if(root == null) {
            return new int[0];
        }
        // 存放二叉树值
        ArrayList<Integer> arrayList = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            arrayList.add(node.val);
            if(node.left != null) {
                queue.add(node.left);
            }
            if(node.right != null) {
                queue.add(node.right);
            }
        }
        int[] result = new int[arrayList.size()];
        for(int i=0; i<arrayList.size(); i++) {
            result[i] = arrayList.get(i);
        }
        return result;
    }

}
