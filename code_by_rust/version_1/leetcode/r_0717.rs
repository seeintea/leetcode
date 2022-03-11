pub fn is_one_bit_character(bits: Vec<i32>) -> bool {
  let mut is_one = false;
  let size = bits.len() - 1;
  for idx in 0..size {
    if is_one {
      is_one = false;
    } else {
      if bits[idx] == 1 {
        is_one = true;
      }
    }
  }
  !is_one
}

#[cfg(test)]
mod tests {
  use super::is_one_bit_character;
  #[test]
  fn test_is_one_bit_character() {
    let nums1 = vec![1, 0, 0];
    assert_eq!(true, is_one_bit_character(nums1));
    let nums2 = vec![1, 1, 1, 0];
    assert_eq!(false, is_one_bit_character(nums2));
  }
}