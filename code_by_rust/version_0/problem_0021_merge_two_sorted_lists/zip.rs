pub struct Solution;

use crate::data_structures::ListNode;
use std::mem;

impl Solution {
    pub fn merge_two_lists(
        list1: Option<Box<ListNode>>,
        list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let (mut l1, mut l2) = (list1, list2);
        let mut ret = None;
        let mut target = &mut ret;
        loop {
            match (&mut l1, &mut l2) {
                (None, None) => {
                    break;
                }

                (None, rest @ Some(_)) | (rest @ Some(_), None) => {
                    *target = rest.take();
                    break;
                }
                (Some(left), Some(right)) => {
                    *target = if left.val <= right.val {
                        let new_left = left.next.take();
                        mem::replace(&mut l1, new_left)
                    } else {
                        let new_right = right.next.take();
                        mem::replace(&mut l2, new_right)
                    };
                    target = &mut target.as_mut().unwrap().next;
                }
            }
        }
        ret
    }
}

impl super::Solution for Solution {
    fn merge_two_lists(
        list1: Option<Box<ListNode>>,
        list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        Self::merge_two_lists(list1, list2)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_solution() {
        super::super::tests::run::<super::Solution>();
    }
}
