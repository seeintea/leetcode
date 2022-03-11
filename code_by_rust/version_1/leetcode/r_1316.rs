use std::collections::HashSet;

pub fn distinct_echo_substrings(text: String) -> i32 {
    let mut result = 0;
    let size = text.len();
    let mut hash_set: HashSet<String> = HashSet::new();
    for i in 0..size {
        for j in i+1..size {
            if j * 2 - i <= size && text[i..j] == text[j..j*2-i] && !hash_set.contains(&text[i..j]) {
              hash_set.insert(text[i..j].to_string());
              result += 1;
            }
        }
    }
    result
}

#[cfg(test)]
mod test {
  use super::*;
  #[test]
  fn test_distinct_echo_substrings(){
    assert_eq!(2, distinct_echo_substrings("leetcodeleetcode".to_string()));
    assert_eq!(3, distinct_echo_substrings("abcabcabc".to_string()));
  }
}