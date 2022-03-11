pub fn count_good_rectangles(rectangles: Vec<Vec<i32>>) -> i32 {
    let min_len_vec: Vec<&i32> = rectangles
        .iter()
        .map(|rect| rect.iter().min().unwrap())
        .collect();
    let max_len = min_len_vec.iter().max().unwrap();
    min_len_vec.iter().filter(|i| *i == max_len).count() as i32
}

#[cfg(test)]
mod tests {
    use super::count_good_rectangles;
    #[test]
    fn test_count_good_rectangles() {
        assert_eq!(
            3,
            count_good_rectangles(vec![vec![5, 8], vec![3, 9], vec![5, 12], vec![16, 5]])
        )
    }
}
