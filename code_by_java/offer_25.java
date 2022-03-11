public class offer_25 {

    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    /**
     * 合并两个排序的链表
     * 链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
     * @param l1 链表1
     * @param l2 链表2
     * @return 合并链表
     */
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(-1);
        ListNode use = head;

        while (l1 !=null && l2 !=null) {
            if(l1.val < l2.val) {
                use.next = new ListNode(l1.val);
                use = use.next;
                l1 = l1.next;
            } else  {
                use.next = new ListNode(l2.val);
                use = use.next;
                l2 = l2.next;
            }
        }

        if(l1 != null) {
            use.next = l1;
        }

        if(l2 != null) {
            use.next = l2;
        }

        return head.next;
    }

}
