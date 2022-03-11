pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
    let mut vec: Vec<i32> = vec![];
    let char_arr = s.as_bytes();
    let mut record = -1;
    for i in 0..s.len() {
        if char_arr[i] == c as u8 {
            vec.push(0);
            record = 1;
        } else if record == -1 {
            vec.push(record);
        } else {
          vec.push(record);
          record += 1;
        }
    }
    let mut i = s.len() - 1;
    while 0 < i {
        if vec[i] == 0 {
          record = 1;
        } else if vec[i] == -1 || record < vec[i] {
          vec[i] = record;
          record += 1;
        }
        i -= 1;
    }
    if vec[0] == -1 || vec[0] > record {
      vec[0] = record;
    }
    vec
}

#[cfg(test)]
mod test {
  use super::*;
  #[test]
  fn test_shortest_to_char() {
    assert_eq!(vec![3,2,1,0,1,0,0,1,2,2,1,0], shortest_to_char("loveleetcode".to_string(), 'e'));
    assert_eq!(vec![3,2,1,0], shortest_to_char("aaab".to_string(), 'b'));
    assert_eq!(vec![0], shortest_to_char("a".to_string(), 'a'))
  }
}
