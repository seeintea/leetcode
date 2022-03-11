use std::collections::HashSet;

pub fn has_all_codes(s: String, k: i32) -> bool {
    if s.len() < ((1 << k) + k - 1) as usize {
        return false;
    }
    let mut exist: HashSet<String> = HashSet::new();
    let tail = s.len() as i32 - k + 1;
    for i in 0..tail as usize {
        exist.insert((&s[i..i + k as usize]).to_string());
    }
    exist.len() == (1 << k)
}

#[cfg(test)]
mod test {
    use super::has_all_codes;
    #[test]
    fn test_has_all_codes() {
        assert_eq!(true, has_all_codes("00110".to_string(), 2));
        assert_eq!(true, has_all_codes("00110110".to_string(), 2));
        assert_eq!(false, has_all_codes("01".to_string(), 2));
    }
}
