/**
 * https://leetcode-cn.com/problems/single-element-in-a-sorted-array/
 * 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
 * 请你找出并返回只出现一次的那个数。
 * 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/single-element-in-a-sorted-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
    let mut start = 0;
    let mut end = nums.len() - 1;
    while start < end {
        let mid = start + (end - start) / 2;
        if nums[mid] == nums[mid ^ 1] {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    nums[start]
}

#[cfg(test)]
mod tests {
    use super::single_non_duplicate;
    #[test]
    fn test_single_non_duplicate() {
        assert_eq!(2, single_non_duplicate(vec![1, 1, 2, 3, 3, 4, 4, 8, 8]));
        assert_eq!(2, single_non_duplicate(vec![1, 1, 2, 3, 3]));
        assert_eq!(3, single_non_duplicate(vec![1, 1, 2, 2, 3]));
        assert_eq!(2, single_non_duplicate(vec![1, 1, 2]));
    }
}
