use crate::datastruct::list_node::ListNode;

/**
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 */
pub fn middle_node(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let (mut slow, mut fast) = (&head, &head);
    while fast.as_ref().is_some() && fast.as_ref()?.next.is_some() {
        slow = &slow.as_ref()?.next;
        fast = &fast.as_ref()?.next.as_ref()?.next;
    }
    slow.clone()
}
