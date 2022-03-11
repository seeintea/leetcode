use std::collections::HashSet;

pub fn gcd(a: i32, b: i32) -> i32 {
    if a % b == 0 {
        return b;
    } else {
        return gcd(b, a % b);
    }
}

pub fn can_measure_water(jug1_capacity: i32, jug2_capacity: i32, target_capacity: i32) -> bool {
    if jug1_capacity + jug2_capacity < target_capacity {
        return false;
    }
    if jug1_capacity == 0 || jug2_capacity == 0 {
        return target_capacity == 0 || jug1_capacity + jug2_capacity == target_capacity;
    }
    target_capacity % gcd(jug1_capacity, jug2_capacity) == 0
}

pub fn hash_fn(x: i32, y: i32) -> String {
    let mut s1 = x.to_string();
    let s2 = '_'.to_string();
    let s3 = y.to_string();
    s1 += &s2;
    s1 += &s3;
    s1
}

pub fn can_measure_water_v2(jug1_capacity: i32, jug2_capacity: i32, target_capacity: i32) -> bool {
    let mut stack = vec![(0, 0)];
    let mut hash_dic: HashSet<String> = HashSet::new();
    while !stack.is_empty() {
        let (v1, v2) = stack.pop().unwrap();
        if hash_dic.contains(&hash_fn(v1, v2)) {
            continue;
        }
        hash_dic.insert(hash_fn(v1, v2));
        if v1 == target_capacity || v2 == target_capacity || v1 + v2 == target_capacity {
            return true;
        }
        stack.push((jug1_capacity, v2));
        stack.push((v1, jug2_capacity));
        stack.push((0, v2));
        stack.push((v1, 0));
        stack.push((
            v1 - v1.min(jug2_capacity - v2),
            v2 + v1.min(jug2_capacity - v2),
        ));
        stack.push((
            v1 + v2.min(jug1_capacity - v1),
            v2 - v2.min(jug1_capacity - v1),
        ));
    }
    false
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_can_measure_water() {
        assert_eq!(true, can_measure_water(3, 5, 4));
        assert_eq!(false, can_measure_water(2, 6, 5));
        assert_eq!(true, can_measure_water(2, 3, 0));
        assert_eq!(true, can_measure_water(104597, 104623, 123));
        assert_eq!(true, can_measure_water_v2(3, 5, 4));
        assert_eq!(false, can_measure_water_v2(2, 6, 5));
        assert_eq!(true, can_measure_water_v2(2, 3, 0));
        assert_eq!(true, can_measure_water_v2(104597, 104623, 123));
    }
}
