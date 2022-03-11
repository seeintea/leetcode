pub mod dynamic_programming;

pub trait Solution {
    /**
     * https://leetcode-cn.com/problems/house-robber
     * 打家劫舍
     * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
     * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
     */
    fn rob(nums: Vec<i32>) -> i32;
}

#[cfg(test)]
mod tests {
    use super::Solution;

    pub fn run<S: Solution>() {
        let test_cases = [(&[1, 2, 3, 1] as &[_], 4), (&[2, 7, 9, 3, 1], 12)];

        for (nums, expected) in test_cases {
            assert_eq!(S::rob(nums.to_vec()), expected);
        }
    }
}
