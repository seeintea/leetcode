pub fn largest_altitude(gain: Vec<i32>) -> i32 {
    let mut max = 0;
    let size = gain.len();
    let mut use_vec = vec![0; size + 1];
    for i in 1..(size + 1) {
        let height = use_vec[i - 1] + gain[i - 1];
        use_vec[i] = height;
        max = max.max(height);
    }
    max
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_largest_altitude() {
        assert_eq!(1, largest_altitude(vec![-5, 1, 5, 0, -7]));
        assert_eq!(0, largest_altitude(vec![-4, -3, -2, -1, 4, 3, 2]));
        assert_eq!(0, largest_altitude(vec![-1]));
        assert_eq!(1, largest_altitude(vec![1]));
    }
}
