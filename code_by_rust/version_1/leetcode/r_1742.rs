pub fn count_balls(low_limit: i32, high_limit: i32) -> i32 {
    let mut vec = vec![0; 46];
    for i in low_limit..high_limit + 1 {
        let mut a = i;
        let mut sum = 0;
        while a != 0 {
            sum += a % 10;
            a /= 10;
        }
        vec[sum as usize] += 1;
    }
    vec.sort();
    vec[vec.len() - 1]
}

#[cfg(test)]
mod test {
    use super::count_balls;
    #[test]
    fn test_count_balls() {
        assert_eq!(2, count_balls(1, 10))
    }
}
