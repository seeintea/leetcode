pub mod backtracking;

pub trait Solution {
    /**
     * https://leetcode-cn.com/problems/permutations/
     * 全排列
     * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
     */
    fn permute(nums: Vec<i32>) -> Vec<Vec<i32>>;
}

#[cfg(test)]
mod tests {
    use super::Solution;
    use crate::test_utilities::unstable_sorted;
    pub fn run<S: Solution>() {
        let test_cases = [
            (&[] as &[_], &[&[] as &[_]] as &[&[_]]),
            (&[1], &[&[1]]),
            (&[1, 2], &[&[1, 2], &[2, 1]]),
            (
                &[1, 2, 3],
                &[
                    &[1, 2, 3],
                    &[1, 3, 2],
                    &[2, 1, 3],
                    &[2, 3, 1],
                    &[3, 1, 2],
                    &[3, 2, 1],
                ],
            ),
            (
                &[1, 2, 3, 4],
                &[
                    &[1, 2, 3, 4],
                    &[1, 2, 4, 3],
                    &[1, 3, 2, 4],
                    &[1, 3, 4, 2],
                    &[1, 4, 2, 3],
                    &[1, 4, 3, 2],
                    &[2, 1, 3, 4],
                    &[2, 1, 4, 3],
                    &[2, 3, 1, 4],
                    &[2, 3, 4, 1],
                    &[2, 4, 1, 3],
                    &[2, 4, 3, 1],
                    &[3, 1, 2, 4],
                    &[3, 1, 4, 2],
                    &[3, 2, 1, 4],
                    &[3, 2, 4, 1],
                    &[3, 4, 1, 2],
                    &[3, 4, 2, 1],
                    &[4, 1, 2, 3],
                    &[4, 1, 3, 2],
                    &[4, 2, 1, 3],
                    &[4, 2, 3, 1],
                    &[4, 3, 1, 2],
                    &[4, 3, 2, 1],
                ],
            ),
        ];
        for (nums, expected) in test_cases {
            assert_eq!(unstable_sorted(S::permute(nums.to_vec())), expected);
        }
    }
}
