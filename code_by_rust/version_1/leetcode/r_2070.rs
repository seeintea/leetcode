pub fn binary_query(find_items: &Vec<Vec<i32>>, size: usize, q: i32) -> i32 {
    let mut left_side = 0;
    let mut right_side = size;
    while left_side < right_side {
        let mid = (left_side + right_side - 1) / 2;
        if find_items[mid][0] > q {
            right_side = mid
        } else {
            left_side = mid + 1;
        }
    }
    if left_side == 0 {
        return 0;
    }
    find_items[left_side - 1][1]
}

pub fn maximum_beauty(items: Vec<Vec<i32>>, queries: Vec<i32>) -> Vec<i32> {
    let mut ret = Vec::new();
    let mut items = items;
    items.sort_by(|a, b| a[0].partial_cmp(&b[0]).unwrap());
    for idx in 1..items.len() {
        items[idx][1] = items[idx][1].max(items[idx - 1][1]);
    }
    let size = items.len();
    for q in queries.iter() {
        ret.push(binary_query(&items, size, *q));
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::maximum_beauty;
    #[test]
    fn test_maximum_beauty() {
        assert_eq!(
            vec![2, 4, 5, 5, 6, 6],
            maximum_beauty(
                vec![vec![1, 2], vec![3, 2], vec![2, 4], vec![5, 6], vec![3, 5]],
                vec![1, 2, 3, 4, 5, 6]
            )
        );
        assert_eq!(vec![0], maximum_beauty(vec![vec![10, 1000]], vec![5]));
    }
}
