pub fn dominant_index(nums: Vec<i32>) -> i32 {
    let mut max_value = -1;
    let mut result = -1;
    let mut second_value = -1;
    for i in 0..nums.len() {
        if max_value < nums[i] {
            result = i as i32;
            second_value = max_value;
            max_value = nums[i]
        } else if second_value < nums[i] {
            second_value = nums[i];
        }
    }
    if 2 * second_value <= max_value {
        return result;
    }
    -1
}

#[cfg(test)]
mod test {
    use super::dominant_index;
    #[test]
    fn test_dominant_index() {
        assert_eq!(0, dominant_index(vec![1]));
        assert_eq!(1, dominant_index(vec![3, 6, 1, 0]));
        assert_eq!(-1, dominant_index(vec![1, 2, 3, 4]));
        assert_eq!(-1, dominant_index(vec![2, 3]));
        assert_eq!(1, dominant_index(vec![2, 4]));
        assert_eq!(0, dominant_index(vec![1, 0]));
        assert_eq!(-1, dominant_index(vec![0, 0, 3, 2]));
    }
}
