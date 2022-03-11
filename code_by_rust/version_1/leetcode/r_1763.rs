use std::collections::HashSet;

pub fn longest_nice_substring(s: String) -> String {
    let memo: HashSet<char> = s.chars().collect();
    for (idx, ch) in s.chars().enumerate() {
        if memo.contains(&ch.to_ascii_uppercase()) && memo.contains(&ch.to_ascii_lowercase()) {
            continue;
        }
        let (s1, s2) = (
            longest_nice_substring(s[0..idx].to_string()),
            longest_nice_substring(s[idx + 1..].to_string()),
        );
        return if s1.len() >= s2.len() { s1 } else { s2 };
    }
    s
}

#[cfg(test)]
mod tests {
    use super::longest_nice_substring;
    #[test]
    fn test_longest_nice_substring() {
        assert_eq!(
            String::from("aAa"),
            longest_nice_substring(String::from("YazaAay"))
        );
    }
}
