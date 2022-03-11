use std::collections::HashMap;

pub fn count_k_difference(nums: Vec<i32>, k: i32) -> i32 {
    let mut map = HashMap::new();
    let mut ret = 0;
    nums.iter().for_each(|x| {
        ret += *map.get(&(*x + k)).unwrap_or(&0) + *map.get(&(*x - k)).unwrap_or(&0);
        *map.entry(*x).or_insert(0) += 1;
    });
    ret
}

#[cfg(test)]
mod tests {
    use super::count_k_difference;
    #[test]
    fn test_count_k_difference() {
        assert_eq!(4, count_k_difference(vec![1, 2, 2, 1], 1))
    }
}
