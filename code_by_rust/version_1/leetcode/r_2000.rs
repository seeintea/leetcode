pub fn reverse_prefix(word: String, ch: char) -> String {
    let mut word_arr: Vec<char> = word.chars().collect();
    let mut start = 0;
    let mut end = 0;
    for idx in 0..word_arr.len() {
        if word_arr[idx] == ch {
            end = idx;
            break;
        }
    }
    while start < end {
        word_arr.swap(start, end);
        start += 1;
        end -= 1;
    }
    let ret: String = word_arr.iter().collect();
    ret
}

#[cfg(test)]
mod tests {
    use super::reverse_prefix;
    #[test]
    fn test_reverse_prefix() {
        assert_eq!(
            String::from("dcbaefd"),
            reverse_prefix(String::from("abcdefd"), 'd')
        )
    }
}
