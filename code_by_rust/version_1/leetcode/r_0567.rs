use std::collections::HashMap;

/**
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/permutation-in-string
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn check_inclusion(s1: String, s2: String) -> bool {
    let (s1, s2) = (s1.into_bytes(), s2.into_bytes());
    if s2.len() < s1.len() {
        return false;
    }
    let (mut m1, mut m2) = (
        HashMap::with_capacity(s1.len()),
        HashMap::with_capacity(s2.len()),
    );
    s1.iter().for_each(|c| *m1.entry(c).or_insert(0) += 1);
    s2.iter()
        .take(s1.len())
        .for_each(|c| *m2.entry(c).or_insert(0) += 1);
    if m1 == m2 {
        return true;
    }
    for i in 1..s2.len() - s1.len() + 1 {
        if let Some(v) = m2.get(&s2[i - 1]) {
            if *v <= 1 {
                m2.remove(&s2[i - 1]);
            } else {
                *m2.entry(&s2[i - 1]).or_insert(0) -= 1;
            }
        }
        *m2.entry(&s2[s1.len() - 1 + i]).or_insert(0) += 1;
        if m1 == m2 {
            return true;
        }
    }
    false
}
