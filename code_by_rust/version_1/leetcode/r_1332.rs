pub fn remove_palindrome_sub(s: String) -> i32 {
    let s_vec: Vec<char> = s.chars().collect();
    let half = s_vec.len() / 2;
    let size = s_vec.len() - 1;
    for i in 0..half {
        if s_vec[i] != s_vec[size - i] {
            return 2;
        }
    }
    1
}

#[cfg(test)]
mod test {
    use super::remove_palindrome_sub;
    #[test]
    fn test_remove_palindrome_sub() {
        assert_eq!(1, remove_palindrome_sub("ababa".to_string()));
        assert_eq!(2, remove_palindrome_sub("abb".to_string()));
        assert_eq!(2, remove_palindrome_sub("baabb".to_string()))
    }
}
