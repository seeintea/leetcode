use std::collections::HashMap;

pub fn uncommon_from_sentences(s1: String, s2: String) -> Vec<String> {
    let mut map = HashMap::new();
    for s in s1.split(' ') {
        map.insert(s, !map.contains_key(s));
    }
    for s in s2.split(' ') {
        map.insert(s, !map.contains_key(s));
    }
    let mut ret = Vec::new();
    for (k, v) in map {
        if v {
            ret.push(String::from(k));
        }
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::uncommon_from_sentences;
    #[test]
    fn test_uncommon_from_sentences() {
        assert_eq!(
            vec![String::from("banana")],
            uncommon_from_sentences(String::from("apple apple"), String::from("banana"))
        )
    }
}
