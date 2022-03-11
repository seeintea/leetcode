pub fn max_number_of_balloons(text: String) -> i32 {
    let mut cache = [0; 5];
    text.chars().for_each(|c| match c {
        'b' => cache[0] += 1,
        'a' => cache[1] += 1,
        'l' => cache[2] += 1,
        'o' => cache[3] += 1,
        'n' => cache[4] += 1,
        _ => (),
    });
    cache[2] >>= 1;
    cache[3] >>= 1;
    *cache.iter().min().unwrap()
}

#[cfg(test)]
mod tests {
    use super::max_number_of_balloons;
    #[test]
    fn test_max_number_of_balloons() {
        assert_eq!(1, max_number_of_balloons("nlaebolko".to_string()));
    }
}
