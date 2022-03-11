/**
 * 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。
 * 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-difference-between-increasing-elements
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn maximum_difference(nums: Vec<i32>) -> i32 {
    let mut ret = -1;
    let mut prev = nums[0];
    for i in 1..nums.len() {
        if nums[i] > prev {
            ret = ret.max(nums[i] - prev);
        } else {
            prev = nums[i];
        }
    }
    ret
}

#[cfg(test)]
mod test {
    use super::maximum_difference;
    #[test]
    fn test_maximum_difference() {
        assert_eq!(4, maximum_difference(vec![7, 1, 5, 4]));
        assert_eq!(-1, maximum_difference(vec![9, 4, 3, 2]));
    }
}
