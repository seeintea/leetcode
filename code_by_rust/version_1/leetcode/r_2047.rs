pub fn is_word(word: &str) -> bool {
    let word: Vec<char> = word.chars().collect();
    let mut seen = false;
    for (i, c) in word.iter().enumerate() {
        match c {
            '0'..='9' => return false,
            '!' | ',' | '.' => {
                if i != word.len() - 1 {
                    return false;
                }
            }
            '-' => {
                if seen || i == 0 || i == word.len() - 1 {
                    return false;
                }
                seen = true;
                if word[i + 1] < 'a' || word[i + 1] > 'z' {
                    return false;
                }
            }
            _ => (),
        }
    }
    true
}

pub fn count_valid_words(sentence: String) -> i32 {
    let words = sentence.split_whitespace().collect::<Vec<_>>();
    words
        .iter()
        .fold(0, |ret, &word| ret + if is_word(word) { 1 } else { 0 })
}

#[cfg(test)]
mod test {
    use super::count_valid_words;
    #[test]
    fn test_count_valid_words() {
        assert_eq!(3, count_valid_words("cat and  dog".to_string()))
    }
}
