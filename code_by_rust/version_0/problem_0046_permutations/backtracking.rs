pub struct Solution;

use std::{convert, mem};

impl Solution {
    fn helper(nums: &mut [i32], base: &mut Vec<i32>, ret: &mut Vec<Vec<i32>>) {
        if let Some((first, rest)) = nums.split_first_mut() {
            base.push(*first);
            Self::helper(rest, base, ret);
            for i in 0..rest.len() {
                mem::swap(first, &mut rest[i]);
                *base.last_mut().unwrap() = *first;
                Self::helper(rest, base, ret);
                mem::swap(first, &mut rest[i]);
            }
            base.pop();
        } else {
            ret.push(base.clone());
        }
    }

    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut ret = vec![];
        let nums_len = nums.len();

        Self::helper(
            &mut convert::identity(nums),
            &mut Vec::with_capacity(nums_len),
            &mut ret,
        );
        ret
    }
}

impl super::Solution for Solution {
    fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        Self::permute(nums)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_solution() {
        super::super::tests::run::<super::Solution>();
    }
}
