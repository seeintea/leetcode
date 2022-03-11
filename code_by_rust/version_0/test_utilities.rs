use std::{cmp::Ordering, fmt::Debug, iter};

use crate::data_structures::ListNode;

pub trait Matrix<T>: Debug {
    fn to_vec(&self) -> Vec<Vec<T>>;

    fn equals_to_slice(&self, slice: &[Vec<T>]) -> bool
    where
        T: PartialEq;
}

impl<T, const M: usize, const N: usize> Matrix<T> for [[T; N]; M]
where
    T: Clone + Debug,
{
    fn to_vec(&self) -> Vec<Vec<T>> {
        Matrix::to_vec(self.as_slice())
    }

    fn equals_to_slice(&self, slice: &[Vec<T>]) -> bool
    where
        T: PartialEq,
    {
        self.as_slice().equals_to_slice(slice)
    }
}

impl<T, const N: usize> Matrix<T> for [[T; N]]
where
    T: Clone + Debug,
{
    fn to_vec(&self) -> Vec<Vec<T>> {
        self.iter().map(|row| row.to_vec()).collect()
    }

    fn equals_to_slice(&self, slice: &[Vec<T>]) -> bool
    where
        T: PartialEq,
    {
        *slice == *self
    }
}

impl<'a, T> PartialEq<&'a dyn Matrix<T>> for Vec<Vec<T>>
where
    T: PartialEq,
{
    fn eq(&self, other: &&'a dyn Matrix<T>) -> bool {
        other.equals_to_slice(self)
    }
}

pub fn make_list<I: IntoIterator<Item = i32>>(values: I) -> Option<Box<ListNode>> {
    let mut result = None;
    let mut node_ref = &mut result;
    for value in values {
        *node_ref = Some(Box::new(ListNode::new(value)));
        node_ref = &mut node_ref.as_mut().unwrap().next;
    }
    result
}

pub fn iter_list(list: &Option<Box<ListNode>>) -> impl Iterator<Item = &i32> {
    iter::successors(list.as_deref(), |node| node.next.as_deref()).map(|node| &node.val)
}

pub fn unstable_sorted_by<T>(
    iter: impl IntoIterator<Item = T>,
    compare: impl FnMut(&T, &T) -> Ordering,
) -> Vec<T> {
    let mut result = iter.into_iter().collect::<Vec<_>>();

    result.sort_unstable_by(compare);

    result
}

pub fn unstable_sorted_by_key<T, K: Ord>(
    iter: impl IntoIterator<Item = T>,
    f: impl FnMut(&T) -> K,
) -> Vec<T> {
    let mut result = iter.into_iter().collect::<Vec<_>>();

    result.sort_unstable_by_key(f);

    result
}

pub fn unstable_sorted<T: Ord>(iter: impl IntoIterator<Item = T>) -> Vec<T> {
    let mut result = iter.into_iter().collect::<Vec<_>>();

    result.sort_unstable();

    result
}
