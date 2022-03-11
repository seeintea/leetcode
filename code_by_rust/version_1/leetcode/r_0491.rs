pub fn dfs(nums: &[i32], last: i32, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
  if nums.is_empty() {
    if path.len() >= 2 {
      result.push(path.to_vec())
    }
    return;
  }
  if nums[0] >= last {
    path.push(nums[0]);
    dfs(&nums[1..], nums[0], path, result);
    path.pop();
  }
  if nums[0] != last {
    dfs(&nums[1..], last, path, result)
  }
}

pub fn find_subsequences(nums: Vec<i32>) -> Vec<Vec<i32>> {
  let mut result = vec![];
  dfs(&nums[..], i32::MIN, &mut vec![], &mut result);
  result
}

#[cfg(test)]
mod test {
  use super::*;
  #[test]
  fn test_find_subsequences() {
    assert_eq!(vec![vec![2,3]], find_subsequences(vec![2,3]));
  }
  
}