pub fn convert_to_title(column_number: i32) -> String {
  let mut res = String::new();
  let mut calc_value = column_number;
  while calc_value > 0 {
    let current = (calc_value - 1) % 26;
    calc_value = (calc_value - 1) / 26;
    res.push(('A' as u8 + current as u8) as char)
  }
  res.chars().rev().collect::<String>()
}

#[cfg(test)]
mod tests {
  use super::convert_to_title;
  #[test]
  fn test_convert_to_title() {
    let column0 = 1;
    assert_eq!("A", convert_to_title(column0));
    let column1 = 28;
    assert_eq!("AB", convert_to_title(column1));
    let column2 = 701;
    assert_eq!("ZY", convert_to_title(column2));
    let column3 = 2147483647;
    assert_eq!("FXSHRXW", convert_to_title(column3));
  }
}