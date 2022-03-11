use std::collections::HashSet;

/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
pub fn length_of_longest_substring(s: String) -> i32 {
    let mut set = HashSet::new();
    let (mut left, mut right, mut ret) = (0, 0, 0);
    let s_arr: Vec<char> = s.chars().collect();
    s_arr.iter().enumerate().for_each(|(_idx, ch)| {
        while set.contains(ch) {
            set.remove(&s_arr[left as usize]);
            left += 1;
        }
        set.insert(ch);
        ret = ret.max(right - left + 1);
        right += 1;
    });
    ret
}
