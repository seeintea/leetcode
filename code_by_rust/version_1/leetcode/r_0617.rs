use std::cell::RefCell;
use std::rc::Rc;

use crate::datastruct::tree_node::TreeNode;

/**
 * 给你两棵二叉树： root1 和 root2 。
 * 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
 * 返回合并后的二叉树。
 * 注意: 合并过程必须从两个树的根节点开始。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/merge-two-binary-trees
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn merge_trees(
    root1: Option<Rc<RefCell<TreeNode>>>,
    root2: Option<Rc<RefCell<TreeNode>>>,
) -> Option<Rc<RefCell<TreeNode>>> {
    match (root1, root2) {
        (Some(n1), Some(n2)) => {
            let (mut n1, mut n2) = (n1.borrow_mut(), n2.borrow_mut());
            Some(Rc::new(RefCell::new(TreeNode {
                val: (n1.val + n2.val),
                left: merge_trees(n1.left.take(), n2.left.take()),
                right: merge_trees(n1.right.take(), n2.right.take()),
            })))
        }
        (None, Some(n2)) => Some(n2),
        (Some(n1), None) => Some(n1),
        (None, None) => None,
    }
}
