pub mod simulation;

pub trait Solution {
    /**
     * https://leetcode-cn.com/problems/base-7/submissions/
     * 七进制数
     * 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
     */
    fn convert_to_base7(nums: i32) -> String;
}

#[cfg(test)]
mod tests {
    use super::Solution;

    pub fn run<S: Solution>() {
        let test_case = [(100, "202".to_string()), (-7, "-10".to_string())];

        for (nums, expected) in test_case {
            assert_eq!(S::convert_to_base7(nums), expected);
        }
    }
}
