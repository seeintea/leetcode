pub fn number_of_matches(n: i32) -> i32 {
    n - 1
}

#[cfg(test)]
mod test {
    use super::number_of_matches;
    #[test]
    fn test_number_of_matches() {
        assert_eq!(6, number_of_matches(7))
    }
}
