pub mod recursive;

use crate::data_structures::ListNode;

pub trait Solution {
    /**
     * https://leetcode-cn.com/problems/reverse-linked-list/
     * 反转链表
     * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
     */
    fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>>;
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_utilities;
    pub fn run<S: Solution>() {
        let test_case = [(&[1, 2, 3, 4, 5] as &[_], &[5, 4, 3, 2, 1] as &[_])];
        for (head, expected) in test_case {
            assert_eq!(
                test_utilities::iter_list(&S::reverse_list(test_utilities::make_list(
                    head.iter().copied()
                )))
                .copied()
                .collect::<Box<_>>()
                .as_ref(),
                expected
            );
        }
    }
}
