pub fn buddy_strings(s: String, goal: String) -> bool {
    if s.len() != goal.len() {
        return false;
    }
    let r = s
        .bytes()
        .zip(goal.bytes())
        .filter(|u| u.0 != u.1)
        .collect::<Vec<_>>();
    match r.len() {
        2 => r[0].1 == r[1].0 && r[0].0 == r[1].1,
        0 => s.bytes().collect::<std::collections::HashSet<_>>().len() < s.len(),
        _ => false,
    }
}

#[cfg(test)]
mod test {
    use super::buddy_strings;
    #[test]
    fn test_buddy_strings() {
        assert_eq!(true, buddy_strings("ab".to_string(), "ba".to_string()))
    }
}
