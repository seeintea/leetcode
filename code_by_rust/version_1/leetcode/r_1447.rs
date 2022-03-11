pub fn simplified_fractions(n: i32) -> Vec<String> {
    let mut ret = vec![];
    fn back_track(i: i32, j: i32) -> i32 {
        return if i == 0 { j } else { back_track(j % i, i) };
    }
    (1..n).into_iter().for_each(|i| {
        (2..=n).into_iter().for_each(|j| {
            if i < j && back_track(i, j) == 1 {
                ret.push(format!("{}/{}", i, j))
            }
        })
    });
    ret
}

#[cfg(test)]
mod tests {
    use super::simplified_fractions;
    #[test]
    fn test_simplified_fractions() {
        assert_eq!(vec!["1/2".to_string()], simplified_fractions(2));
    }
}
