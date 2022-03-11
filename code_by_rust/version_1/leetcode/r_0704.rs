/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/binary-search
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let mut low = 0;
    let mut hight = nums.len();
    while low < hight {
        let mid = (low + hight) / 2;
        if nums[mid] == target {
            return mid as i32;
        } else if nums[mid] < target {
            low = mid + 1;
        } else {
            hight = mid;
        }
    }
    -1
}

#[cfg(test)]
mod tests {
    use super::search;
    #[test]
    fn test_search() {
        assert_eq!(4, search(vec![-1, 0, 3, 5, 9, 12], 9));
        assert_eq!(-1, search(vec![-1, 0, 3, 5, 9, 12], 2));
    }
}
