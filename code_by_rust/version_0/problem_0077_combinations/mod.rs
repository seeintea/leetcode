pub mod recursive;

pub trait Solution {
    /**
     * https://leetcode-cn.com/problems/combinations/
     * 组合
     * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
     * 你可以按 任何顺序 返回答案。
     */
    fn combine(n: i32, k: i32) -> Vec<Vec<i32>>;
}

#[cfg(test)]
mod tests {
    use super::Solution;
    use crate::test_utilities::Matrix;
    pub fn run<S: Solution>() {
        let test_cases = [
            (
                (4, 2),
                &[[1, 2], [1, 3], [2, 3], [1, 4], [2, 4], [3, 4]] as &dyn Matrix<_>,
            ),
            ((1, 1), &[[1]] as &dyn Matrix<_>),
        ];

        for ((n, k), expected) in test_cases {
            assert_eq!(S::combine(n, k), expected.to_vec());
        }
    }
}
