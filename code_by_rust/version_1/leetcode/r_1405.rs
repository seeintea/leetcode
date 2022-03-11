pub fn longest_diverse_string(a: i32, b: i32, c: i32) -> String {
    let mut ch = vec![(a, 'a'), (b, 'b'), (c, 'c')];
    let mut ret = vec![];
    loop {
        ch.sort_unstable();
        if ch[2].0 == 0 {
            break;
        }
        let len = ret.len();
        if len >= 2 && ret[len - 1] == ret[len - 2] && ret[len - 1] == ch[2].1 {
            if ch[1].0 > 0 {
                ch[1].0 -= 1;
                ret.push(ch[1].1);
            } else {
                ch[2].0 -= 1;
            }
        } else {
            ch[2].0 -= 1;
            ret.push(ch[2].1);
        }
    }
    ret.iter().collect()
}

#[cfg(test)]
mod tests {
    use super::longest_diverse_string;
    #[test]
    fn test_longest_diverse_string() {
        assert_eq!(String::from("ccbccacc"), longest_diverse_string(1, 1, 7));
    }
}
