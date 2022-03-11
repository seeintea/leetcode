pub mod zip;

use crate::data_structures::ListNode;

pub trait Solution {
    /**
     * https://leetcode-cn.com/problems/merge-two-sorted-lists/
     * 合并两个有序链表
     * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
     */
    fn merge_two_lists(
        list1: Option<Box<ListNode>>,
        list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>>;
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::test_utilities;
    pub fn run<S: Solution>() {
        let test_cases = [
            (
                (&[1, 2, 4] as &[_], &[1, 3, 4] as &[_]),
                &[1, 1, 2, 3, 4, 4] as &[_],
            ),
            ((&[2], &[1]), &[1, 2]),
            ((&[], &[]), &[]),
        ];

        for ((l1, l2), expected) in test_cases {
            let l1 = test_utilities::make_list(l1.iter().copied());
            let l2 = test_utilities::make_list(l2.iter().copied());
            let ret = S::merge_two_lists(l1, l2);
            assert_eq!(
                test_utilities::iter_list(&ret)
                    .copied()
                    .collect::<Box<_>>()
                    .as_ref(),
                expected
            );
        }
    }
}
