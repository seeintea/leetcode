/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/search-insert-position
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
    let mut low = 0;
    let mut hight = nums.len();
    while low < hight {
        let mid = low + (hight - low) / 2;
        if nums[mid] < target {
            low = mid + 1;
        } else {
            hight = mid;
        }
    }
    low as i32
}

#[cfg(test)]
mod tests {
    use super::search_insert;
    #[test]
    fn test_search() {
        assert_eq!(2, search_insert(vec![1, 3, 5, 6], 5));
        assert_eq!(1, search_insert(vec![1, 3, 5, 6], 2));
        assert_eq!(4, search_insert(vec![1, 3, 5, 6], 7));
        assert_eq!(0, search_insert(vec![1, 3, 5, 6], 0));
        assert_eq!(0, search_insert(vec![1], 0));
    }
}
