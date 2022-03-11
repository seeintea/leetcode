pub fn count_quadruplets(nums: Vec<i32>) -> i32 {
    let mut count = 0;
    let size = nums.len();
    let mut cache = vec![0; 201];
    for i in 2..size {
        (0..i - 1).for_each(|j| {
            cache[(nums[i - 1] + nums[j]) as usize] += 1;
        });
        (i + 1..size).for_each(|j| {
            let diff = nums[j] - nums[i];
            if diff > 0 {
                count += cache[diff as usize];
            }
        })
    }
    count
}

#[cfg(test)]
mod test {
    use super::count_quadruplets;
    #[test]
    fn test_count_quadruplets() {
        assert_eq!(1, count_quadruplets(vec![1, 2, 3, 6]));
    }
}
