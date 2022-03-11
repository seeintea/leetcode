pub struct Solution;

impl Solution {
    fn plates_between_candles(s: String, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let len = s.len();
        let (mut pre_sum, mut left_side, mut right_side) =
            (vec![0; len], vec![0; len], vec![0; len]);
        let (mut sum, mut left, mut right) = (0, -1, -1);
        for (i, v) in s.char_indices() {
            if v == '*' {
                sum += 1;
            } else if v == '|' {
                left = i as i32
            }
            pre_sum[i] = sum;
            left_side[i] = left;
        }
        for (i, v) in s.char_indices().rev() {
            if v == '|' {
                right = i as i32
            }
            right_side[i] = right;
        }
        let mut ret = vec![];
        for q in queries.iter() {
            let x = right_side[q[0] as usize];
            let y = left_side[q[1] as usize];
            if x == -1 || y == -1 || x >= y {
                ret.push(0)
            } else {
                ret.push(pre_sum[y as usize] - pre_sum[x as usize])
            };
        }
        ret
    }
}

impl super::Solution for Solution {
    fn plates_between_candles(s: String, queries: Vec<Vec<i32>>) -> Vec<i32> {
        Self::plates_between_candles(s, queries)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_solution() {
        super::super::tests::run::<super::Solution>();
    }
}
