pub fn truncate_sentence(s: String, k: i32) -> String {
  let mut res = String::with_capacity(s.len());
  let mut current = 1;
  for key in s.bytes() {
    if key == b' ' {
      if current == k {
        break;
      } else {
        current += 1;
      }
    }
    res.push(key as char);
  }
  res
}

#[cfg(test)]
mod tests {
  use super::truncate_sentence;
  #[test]
  fn test_truncate_sentence() {
    let s1 = String::from("Hello how are you Contestant");
    assert_eq!("Hello how are you", truncate_sentence(s1, 4));
    let s2 = String::from("chopper is not a tanuki");
    assert_ne!("chopper is not a", truncate_sentence(s2, 1));
  }
}