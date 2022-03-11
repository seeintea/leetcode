/**
 * 给定一组正整数，相邻的整数之间将会进行浮点除法操作。例如， [2,3,4] -> 2 / 3 / 4 。
 * 但是，你可以在任意位置添加任意数目的括号，来改变算数的优先级。你需要找出怎么添加括号，才能得到最大的结果，并且返回相应的字符串格式的表达式。你的表达式不应该含有冗余的括号。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/optimal-division
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn optimal_division(nums: Vec<i32>) -> String {
    match nums.len() {
        1 => nums[0].to_string(),
        2 => format!("{}/{}", nums[0], nums[1]),
        _ => format!(
            "{}/({})",
            nums[0],
            nums[1..]
                .iter()
                .map(|v| v.to_string())
                .collect::<Vec<String>>()
                .join("/")
        ),
    }
}

#[cfg(test)]
mod test {
    use super::optimal_division;
    #[test]
    fn test_optimal_division() {
        assert_eq!(
            String::from("1000/(100/10/2)"),
            optimal_division(vec![1000, 100, 10, 2])
        );
    }
}
