pub fn find_min_fibonacci_numbers(k: i32) -> i32 {
    let mut f1 = 1;
    let mut f2 = 1;
    let mut fib_vec = vec![1];
    while f1 + f2 <= k {
        let f_next = f1 + f2;
        fib_vec.push(f_next);
        f1 = f2;
        f2 = f_next;
    }
    let mut ret = 0;
    let mut len = fib_vec.len() - 1;
    let mut k = k;
    while 0 <= len as i32 && 0 < k {
        let v = fib_vec[len];
        if k >= v {
            k -= v;
            ret += 1;
        }
        len -= 1;
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::find_min_fibonacci_numbers;
    #[test]
    fn test_find_min_fibonacci_numbers() {
        assert_eq!(2, find_min_fibonacci_numbers(7));
        assert_eq!(1, find_min_fibonacci_numbers(2));
    }
}
