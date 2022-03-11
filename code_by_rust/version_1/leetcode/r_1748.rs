pub fn sum_of_unique(nums: Vec<i32>) -> i32 {
    let mut memo = vec![0; 101];
    nums.iter().for_each(|v| memo[*v as usize] += 1);
    memo.iter()
        .enumerate()
        .fold(0, |ret, (k, v)| if *v == 1 { ret + k as i32 } else { ret })
}

#[cfg(test)]
mod tests {
    use super::sum_of_unique;
    #[test]
    fn test_sum_of_unique() {
        assert_eq!(4, sum_of_unique(vec![1, 2, 3, 2]));
    }
}
