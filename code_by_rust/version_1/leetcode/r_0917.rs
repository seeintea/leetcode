pub fn reverse_only_letters(s: String) -> String {
    let mut ret = s.clone().into_bytes();
    let mut start = 0;
    let mut end = ret.len() - 1;
    let is_letter = |b: u8| (b <= b'z' && b >= b'a') || (b >= b'A' && b <= b'Z');
    while start < end {
        while start < end && !is_letter(ret[start]) {
            start += 1;
        }
        while start < end && !is_letter(ret[end]) {
            end -= 1;
        }
        if end > start {
            let temp = ret[start];
            ret[start] = ret[end];
            ret[end] = temp;
            end -= 1;
            start += 1;
        }
    }
    String::from_utf8(ret).unwrap()
}

#[cfg(test)]
mod tests {
    use super::reverse_only_letters;
    #[test]
    fn test_reverse_only_letters() {
        assert_eq!(
            String::from("j-Ih-gfE-dCba"),
            reverse_only_letters(String::from("a-bC-dEf-ghIj"))
        );
    }
}
