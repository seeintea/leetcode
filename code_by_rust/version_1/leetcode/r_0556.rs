pub fn next_greater_element(n: i32) -> i32 {
    let mut n_arr: Vec<u8> = n.to_string().bytes().collect();
    let mut ptr = n_arr.len() - 1;
    while ptr > 0 && n_arr[ptr] <= n_arr[ptr - 1] {
        ptr -= 1;
    }

    if ptr == 0 {
        return -1;
    }

    let mut change = n_arr.len() - 1;
    while n_arr[change] <= n_arr[ptr - 1] {
        change -= 1;
    }
    n_arr.swap(ptr - 1, change);
    n_arr[ptr..].reverse();

    let mut res = 0_i64;
    for i in 0..n_arr.len() {
        res = res * 10 + (n_arr[i] as i64 - b'0' as i64);
    }

    if res > i32::MAX as i64 {
        return -1;
    }
    res as i32
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_next_greater_element() {
        assert_eq!(21, next_greater_element(12));
        assert_eq!(-1, next_greater_element(95431));
        assert_eq!(158513467, next_greater_element(158476531));
    }
}
