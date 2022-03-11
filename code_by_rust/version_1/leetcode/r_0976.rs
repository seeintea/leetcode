pub fn largest_perimeter(mut nums: Vec<i32>) -> i32 {
  nums.sort();
  let size = nums.len();
  for i in (2..size).rev() {
    if nums[i] < nums[i - 1] + nums[i - 2] {
      return nums[i] + nums[i - 1] + nums[i - 2];
    }
  }
  0
}

#[cfg(test)]
mod tests {
  use super::largest_perimeter;
  #[test]
  fn test_largest_perimeter() {
    let nums = vec![2, 1, 2];
    assert_eq!(5, largest_perimeter(nums));
  }
}