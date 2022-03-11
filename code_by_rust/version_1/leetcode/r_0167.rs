/**
 * 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。
 * 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 * 你所设计的解决方案必须只使用常量级的额外空间。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
    let mut low = 0;
    let mut hight = numbers.len() - 1;
    while low < hight {
        let sum = numbers[low] + numbers[hight];
        if sum == target {
            return vec![(low + 1) as i32, (hight + 1) as i32];
        } else if sum < target {
            low += 1;
        } else {
            hight -= 1;
        }
    }
    vec![-1, -1]
}

#[cfg(test)]
mod test {
    use super::two_sum;
    #[test]
    fn test_two_sum() {
        assert_eq!(vec![1, 2], two_sum(vec![2, 7, 11, 15], 9));
    }
}
