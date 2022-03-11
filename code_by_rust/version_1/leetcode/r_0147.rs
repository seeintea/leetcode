use crate::datastruct::list_node::ListNode;

pub fn insertion_sort_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
  if head.is_none() {
    return head;
  }
  let mut prev_head = Some(Box::new(ListNode {val: 0, next: head}));
  let mut tail_node = &mut prev_head.as_mut()?.next as *mut Option<Box<ListNode>>;
  unsafe {
    while(*tail_node).as_ref()?.next.is_some() {
      if(*tail_node).as_ref()?.val <= (*tail_node).as_ref()?.next.as_ref()?.val {
        tail_node = &mut (*tail_node).as_mut()?.next as *mut Option<Box<ListNode>>;
      } else {
        let mut unsorted = (*tail_node).as_mut()?.next.take();
        let mut ptr = &mut prev_head as *mut Option<Box<ListNode>>;
        while(*ptr).as_ref()?.next.is_some() && (*ptr).as_ref()?.next.as_ref()?.val <= unsorted.as_ref()?.val {
          ptr = &mut (*ptr).as_mut()?.next as *mut Option<Box<ListNode>>;
        }
        (*tail_node).as_mut()?.next = unsorted.as_mut()?.next.take();
        unsorted.as_mut()?.next = (*ptr).as_mut()?.next.take();
        (*ptr).as_mut()?.next = unsorted
      }
    }
  }
  prev_head?.next
}

#[cfg(test)]
mod tests {
  use super::*;
  #[test]
  fn test_watering_plants() {
    let next = Some(Box::new(ListNode::new(3)));
    let head = Some(Box::new(ListNode {val:5, next}));
    let result_next = Some(Box::new(ListNode::new(5)));
    let result_head = Some(Box::new(ListNode {val:3, next:result_next}));
    assert_eq!(result_head, insertion_sort_list(head))
  }
}