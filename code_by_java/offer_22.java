public class offer_22 {

    public class ListNode {
      int val;
      ListNode next;
      ListNode(int x) { val = x; }
    }

    /**
     * 链表中倒数第k个节点
     * 链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
     * @param head 头节点
     * @param k 目标节点位置
     * @return 返回目标节点
     */
    public ListNode getKthFromEnd(ListNode head, int k) {
        int pos = 0;
        ListNode use = head;
        while (use != null) {
            pos++;
            use = use.next;
        }
        use = head;
        pos -= k;
        while (pos > 0) {
            use = use.next;
            pos--;
        }
        return use;
    }


}
