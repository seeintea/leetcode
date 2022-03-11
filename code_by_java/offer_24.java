public class offer_24 {

    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    /**
     * 反转链表
     * 链接：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
     * @param head 头节点
     * @return 反转头节点
     */
    public ListNode reverseList(ListNode head) {
        ListNode result = new ListNode(-1);
        while (head != null) {
            ListNode node = new ListNode(head.val);
            node.next = result.next;
            result.next = node;
            head = head.next;
        }
        return result.next;
    }

}
