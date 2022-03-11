use std::vec;

pub fn good_days_to_rob_bank(security: Vec<i32>, time: i32) -> Vec<i32> {
    let size = security.len();
    let mut result: Vec<i32> = Vec::new();
    if time == 0 {
        for i in 0..size {
            result.push(i as i32);
        }
        return result;
    }
    if 2 * time + 1 > size as i32 {
        return vec![];
    }
    let mut left_win = 0;
    let mut right_win = 0;
    for i in 1..time + 1 {
        if security[(i - 1) as usize] < security[i as usize] {
            left_win += 1;
        }
    }
    for i in time + 1..2 * time + 1 {
        if security[i as usize] < security[(i - 1) as usize] {
            right_win += 1;
        }
    }
    let mut ptr = time;
    let mut left = 0;
    let mut right = 2 * time as usize;
    while right + 1 < size {
        if left_win == 0 && right_win == 0 {
            result.push(ptr);
        }
        if security[left] < security[left + 1] {
            left_win -= 1;
        }
        if security[ptr as usize] < security[(ptr + 1) as usize] {
            left_win += 1;
        }
        if security[(ptr + 1) as usize] < security[ptr as usize] {
            right_win -= 1;
        }
        if security[right + 1] < security[right] {
            right_win += 1;
        }
        ptr += 1;
        left += 1;
        right += 1;
    }
    if left_win == 0 && right_win == 0 {
        result.push(ptr);
    }
    result
}

#[cfg(test)]
mod test {
    use super::good_days_to_rob_bank;
    #[test]
    fn test_good_days_to_rob_bank() {
        assert_eq!(vec![1, 3], good_days_to_rob_bank(vec![2, 0, 5, 3, 4], 1));
        assert_eq!(
            vec![2, 3],
            good_days_to_rob_bank(vec![5, 3, 3, 3, 5, 6, 2], 2)
        );
        assert_eq!(
            vec![0, 1, 2, 3, 4],
            good_days_to_rob_bank(vec![1, 2, 3, 4, 5], 0)
        )
    }
}
