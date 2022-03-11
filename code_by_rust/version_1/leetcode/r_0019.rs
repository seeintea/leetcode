use crate::datastruct::list_node::ListNode;

/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
    let mut pre_head = Some(Box::new(ListNode::new(0)));
    pre_head.as_mut().unwrap().next = head;
    let mut fast = pre_head.clone();
    let mut slow = &mut pre_head;
    for _ in 0..n {
        fast = fast.unwrap().next;
    }
    while fast.as_ref().unwrap().next.is_some() {
        fast = fast.unwrap().next;
        slow = &mut slow.as_mut().unwrap().next;
    }
    slow.as_mut().unwrap().next = slow.as_mut().unwrap().next.as_mut().unwrap().next.clone();
    pre_head.unwrap().next
}
