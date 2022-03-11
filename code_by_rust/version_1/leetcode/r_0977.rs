/**
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 */
pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
    let mut ret = vec![];
    let mut prev = -1;
    for i in 0..nums.len() {
        if nums[i] < 0 {
            prev = i as i32;
        }
    }
    let mut next = prev + 1;
    while 0 <= prev || next < nums.len() as i32 {
        if prev < 0 {
            ret.push(nums[next as usize].pow(2));
            next += 1;
        } else if next == nums.len() as i32 {
            ret.push(nums[prev as usize].pow(2));
            prev -= 1;
        } else if nums[prev as usize].pow(2) < nums[next as usize].pow(2) {
            ret.push(nums[prev as usize].pow(2));
            prev -= 1;
        } else {
            ret.push(nums[next as usize].pow(2));
            next += 1;
        }
    }
    ret
}

#[cfg(test)]
mod test {
    use super::sorted_squares;
    #[test]
    fn test_sorted_squares() {
        assert_eq!(vec![1, 4, 9, 25], sorted_squares(vec![-5, -3, -2, -1]));
        assert_eq!(vec![1, 4, 9, 16], sorted_squares(vec![1, 2, 3, 4]));
        assert_eq!(vec![1], sorted_squares(vec![-1]));
        assert_eq!(
            vec![0, 1, 9, 16, 100],
            sorted_squares(vec![-4, -1, 0, 3, 10])
        );
        assert_eq!(vec![1], sorted_squares(vec![1]));
    }
}
