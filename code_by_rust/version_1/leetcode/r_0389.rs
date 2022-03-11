pub fn find_the_difference(s: String, t: String) -> char {
  s.bytes().chain(t.bytes()).fold(0, |s,x|s^x) as char
}

#[cfg(test)]
mod test {
  use super::find_the_difference;
  #[test]
  fn tset_find_the_difference() {
    assert_eq!('e', find_the_difference("abcd".to_string(), "abcde".to_string()))
  }
}