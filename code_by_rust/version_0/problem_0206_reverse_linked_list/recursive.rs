pub struct Solution;

use crate::data_structures::ListNode;
use std::mem;

impl Solution {
    fn helper(
        reversed: Option<Box<ListNode>>,
        head: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        if let Some(mut node) = head {
            let new_head = mem::replace(&mut node.next, reversed);
            Self::helper(Some(node), new_head)
        } else {
            reversed
        }
    }

    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        Solution::helper(None, head)
    }
}

impl super::Solution for Solution {
    fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        Self::reverse_list(head)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_solution() {
        super::super::tests::run::<super::Solution>();
    }
}
