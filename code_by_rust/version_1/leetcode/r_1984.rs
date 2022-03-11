pub fn minimum_difference(nums: Vec<i32>, k: i32) -> i32 {
    let mut nums = nums;
    nums.sort();
    nums.iter()
        .enumerate()
        .fold(nums[k as usize - 1] - nums[0], |ret, (i, v)| {
            if i >= k as usize {
                ret.min(v - nums[i - k as usize + 1])
            } else {
                ret
            }
        })
}

#[cfg(test)]
mod tests {
    use super::minimum_difference;
    #[test]
    fn test_minimum_difference() {
        assert_eq!(0, minimum_difference(vec![90], 1));
    }
}
