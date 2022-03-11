pub fn number_of_weak_characters(properties: Vec<Vec<i32>>) -> i32 {
    let mut properties = properties;
    properties.sort_unstable();
    let mut ret = 0;
    let mut lst_a = i32::MAX;
    let mut max_d = i32::MIN;
    let mut current = 0;
    for v in properties.into_iter().rev() {
        let (a, d) = (v[0], v[1]);
        if a != lst_a {
            current = max_d;
        }
        ret += (d < current) as i32;
        max_d = max_d.max(d);
        lst_a = a
    }
    ret
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_number_of_weak_characters() {
        assert_eq!(
            0,
            number_of_weak_characters(vec![vec![5, 5], vec![6, 3], vec![3, 6]])
        )
    }
}
