use std::collections::HashMap;

pub fn contains_nearby_duplicate(nums: Vec<i32>, k: i32) -> bool {
    let mut map: HashMap<i32, usize> = HashMap::new();
    for (i, &v) in nums.iter().enumerate() {
        if let Some(save) = map.insert(v, i) {
            if i - save <= k as usize {
                return true;
            }
        }
    }
    false
}

#[cfg(test)]
mod test {
    use super::contains_nearby_duplicate;
    #[test]
    fn test_contains_nearby_duplicate() {
        assert_eq!(true, contains_nearby_duplicate(vec![1, 2, 3, 1], 3))
    }
}
