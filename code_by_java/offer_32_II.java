import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class offer_32_II {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * 从上到下打印二叉树
     * 链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
     * @param root 根节点
     * @return 层次遍历结果
     */
    public List<List<Integer>> levelOrder(TreeNode root) {
        if(root == null) {
            return new ArrayList<>();
        }
        List<List<Integer>> result = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            List<Integer> list = new ArrayList<>();
            // 读取进入循环之前队列中存储的所有节点
            for(int i=queue.size(); i>0; i--) {
                TreeNode node = queue.poll();
                list.add(node.val);
                if(node.left != null) {
                    queue.add(node.left);
                }
                if(node.right != null) {
                    queue.add(node.right);
                }
            }
            result.add(list);
        }
        return result;
    }

}
