/**
 * https://leetcode-cn.com/problems/rotate-array/
* 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
*/
pub fn rotate(nums: &mut Vec<i32>, k: i32) {
    let k = nums.len() - k as usize % nums.len();
    nums[..k].reverse();
    nums[k..].reverse();
    nums.reverse();
}

#[cfg(test)]
mod tests {
    use super::rotate;
    #[test]
    fn test_rotate() {
        let mut nums = vec![1, 2, 3, 4, 5, 6, 7];
        rotate(&mut nums, 3);
        assert_eq!(vec![5, 6, 7, 1, 2, 3, 4], nums);
    }
}
