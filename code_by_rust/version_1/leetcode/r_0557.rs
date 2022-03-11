/**
 * 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 */
pub fn reverse_words(s: String) -> String {
    let chars = s.as_bytes();
    let mut ret = String::new();
    let (mut i, len) = (0, chars.len());
    while i < len {
        let s = i;
        while i < len && chars[i] != b' ' {
            i += 1;
        }
        for k in (s..i).rev() {
            ret.push(chars[k] as char);
        }
        while i < len && chars[i] == b' ' {
            i += 1;
            ret.push(' ');
        }
    }
    ret
}
