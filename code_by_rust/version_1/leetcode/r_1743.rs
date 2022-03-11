pub fn restore_array(adjacent_pairs: Vec<Vec<i32>>) -> Vec<i32> {
    use std::collections::HashMap;
    let mut hash_map: HashMap<i32, Vec<i32>> = HashMap::new();
    let size = adjacent_pairs.len() + 1;
    for pair in adjacent_pairs {
        let key_left = pair[0];
        let key_right = pair[1];
        let insert_left = hash_map.entry(key_left).or_insert(Vec::<i32>::new());
        insert_left.push(key_right);
        let insert_right = hash_map.entry(key_right).or_insert(Vec::<i32>::new());
        insert_right.push(key_left);
    }

    let mut result = vec![0; size];
    for (key, value) in hash_map.iter() {
        if value.len() == 1 {
            result[0] = *key;
            result[1] = value[0];
            break;
        }
    }

    for i in 2..size {
        let current = hash_map.get(&result[i - 1]).unwrap();
        result[i] = if result[i - 2] != *current.get(0).unwrap() {
            *current.get(0).unwrap()
        } else {
            *current.get(1).unwrap()
        }
    }

    result
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_restore_array() {
        assert_eq!(
            vec![1, 2, 3, 4],
            restore_array(vec![vec![2, 3], vec![3, 4], vec![1, 2]])
        );
    }
}
