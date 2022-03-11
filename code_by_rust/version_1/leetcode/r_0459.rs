/**
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 */
pub fn repeated_substring_pattern(s: String) -> bool {
    let mut t = String::from(&s);
    t.push_str(&s);
    let len = t.len();
    if let Some(v) = t.get(1..(len - 1)) {
        return v.contains(&s);
    }
    false
}

#[cfg(test)]
mod test {
    use super::repeated_substring_pattern;
    #[test]
    fn test_repeated_substring_pattern() {
        assert_eq!(true, repeated_substring_pattern("abab".to_string()));
    }
}
