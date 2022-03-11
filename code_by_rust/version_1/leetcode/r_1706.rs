pub fn find_ball(grid: Vec<Vec<i32>>) -> Vec<i32> {
    let col = grid[0].len();
    let mut ret: Vec<i32> = vec![-1; col];
    for i in 0..col {
        let mut j = i as i32;
        for row in &grid {
            let dir = row[j as usize];
            j += dir;
            if j < 0 || j == col as i32 || row[j as usize] != dir {
                j = -1;
                break;
            }
        }
        if j >= 0 {
            ret[i] = j;
        }
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::find_ball;
    #[test]
    fn test_find_ball() {
        assert_eq!(
            vec![0, 1, 2, 3, 4, -1],
            find_ball(vec![
                vec![1, 1, 1, 1, 1, 1],
                vec![-1, -1, -1, -1, -1, -1],
                vec![1, 1, 1, 1, 1, 1],
                vec![-1, -1, -1, -1, -1, -1]
            ])
        )
    }
}
