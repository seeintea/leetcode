pub fn can_added(first_num: i64, second_num: i64, num: &str, idx: usize) -> bool {
    if idx == num.len() {
        return true;
    }
    let sum_str = i64::to_string(&(first_num + second_num));
    if idx + sum_str.len() > num.len() {
        return false;
    }
    let result_sum = &num[idx..idx + sum_str.len()];
    result_sum == sum_str && can_added(second_num, first_num + second_num, num, idx + sum_str.len())
}

pub fn is_additive_number(num: String) -> bool {
    let num_arr: Vec<char> = num.chars().collect();
    let mut first_num = 0;
    for i in 0..num_arr.len() {
        if i > 0 && num_arr[0] == '0' {
            return false;
        }
        first_num = first_num * 10 + (num_arr[i] as u8 - '0' as u8) as i64;
        let mut second_num = 0_i64;
        for j in i + 1..num_arr.len() {
            if j > i + 1 && num_arr[i + 1] == '0' {
                break;
            }
            second_num = second_num * 10 + (num_arr[j] as u8 - '0' as u8) as i64;
            if j + 1 < num.len() && can_added(first_num, second_num, &num, j + 1) {
                return true;
            }
        }
    }

    false
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_is_additive_number() {
        assert_eq!(true, is_additive_number("199100199".to_string()));
        assert_eq!(true, is_additive_number("112358".to_string()));
        assert_eq!(true, is_additive_number("101".to_string()));
        assert_eq!(true, is_additive_number("000".to_string()));
    }
}
