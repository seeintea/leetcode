// https://leetcode-cn.com/problems/minimum-total-space-wasted-with-k-resizing-operations/submissions/
// 不是最优写法 20220104

pub fn min_space_wasted_k_resizing(nums: Vec<i32>, k: i32) -> i32 {
    let size = nums.len();
    let mut pre_group: Vec<Vec<i32>> = vec![vec![Default::default(); size]; size];
    for i in 0..size {
        let mut max_value = -1;
        let mut total = 0;
        for j in i..size {
            max_value = max_value.max(nums[j]);
            total += nums[j];
            let count = (j - i + 1) as i32;
            pre_group[i][j] = max_value * count - total;
        }
    }
    let mut result: Vec<Vec<i32>> =
        vec![vec![Default::default(); (k + 2).try_into().unwrap()]; size];
    for i in 0..size {
        for j in 0..(k + 2) {
            result[i][j as usize] = i32::MAX / 2;
        }
    }
    for i in 0..size {
        for j in 1..(k + 2) {
            let mut k = 0;
            while k <= i {
                let mut next_value = pre_group[k][i];
                if k != 0 {
                    next_value = result[(k - 1) as usize][(j - 1) as usize] + pre_group[k][i];
                }
                result[i][j as usize] = result[i][j as usize].min(next_value);
                k += 1;
            }
        }
    }
    result[(size - 1) as usize][(k + 1) as usize]
}

#[cfg(test)]
mod tests {
    use super::min_space_wasted_k_resizing;
    #[test]
    fn test_min_space_wasted_k_resizing() {
        assert_eq!(10, min_space_wasted_k_resizing(vec![10, 20], 0));
        assert_eq!(10, min_space_wasted_k_resizing(vec![10, 20, 30], 1));
        assert_eq!(15, min_space_wasted_k_resizing(vec![10, 20, 15, 30, 20], 2));
    }
}
