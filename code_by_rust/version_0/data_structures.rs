// Definition for singly-linked list.

#[derive(PartialEq, Eq)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<Self>>,
}

impl ListNode {
    pub fn new(val: i32) -> Self {
        Self { next: None, val }
    }
}
