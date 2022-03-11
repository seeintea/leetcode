pub mod dynamic_programming;

pub trait Solution {
    /**
     * https://leetcode-cn.com/problems/triangle
     *  三角形最小路径和
     * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
     * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
     */
    fn minimum_total(triangle: Vec<Vec<i32>>) -> i32;
}

#[cfg(test)]
mod tests {
    use super::Solution;

    pub fn run<S: Solution>() {
        let test_cases = [(
            &[&[2] as &[_], &[3, 4], &[6, 5, 7], &[4, 1, 8, 3]] as &[&[_]],
            11,
        )];

        for (triangle, expected) in test_cases {
            assert_eq!(
                S::minimum_total(triangle.iter().copied().map(<[_]>::to_vec).collect()),
                expected
            );
        }
    }
}
