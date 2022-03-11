public class offer_18 {

    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    /**
     * 删除链表的节点
     * 链接：https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
     * @param head 链表头节点
     * @param val 删除值
     * @return 新链表头节点
     */
    public ListNode deleteNode(ListNode head, int val) {
        if(head == null) return null;
        if(head.val == val) return head.next;

        ListNode operation = head;
        ListNode nextOperation = operation.next;
        while (nextOperation != null && nextOperation.val != val) {
            operation = nextOperation;
            nextOperation = operation.next;
        }
        // nextOperation == null => 未匹配
        // nextOperation != null => 匹配
        operation.next = nextOperation == null ? null : nextOperation.next;
        return head;
    }
}
