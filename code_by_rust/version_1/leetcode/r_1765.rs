use std::collections::VecDeque;

pub fn highest_peak(is_water: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let (row, col) = (is_water.len(), is_water[0].len());
    let mut visited = vec![vec![false; col]; row];
    let mut queue = VecDeque::new();
    for i in 0..row {
        for j in 0..col {
            if is_water[i][j] == 1 {
                visited[i][j] = true;
                queue.push_back((i, j));
            }
        }
    }
    let mut ret = vec![vec![0; col]; row];
    let mut high = 0;
    while !queue.is_empty() {
        high += 1;
        for _ in 0..queue.len() {
            let (i, j) = queue.pop_front().unwrap();
            for (x, y) in [(1 as i32, 0 as i32), (-1, 0), (0, 1), (0, -1)] {
                let vx = i as i32 + x;
                let vy = j as i32 + y;
                if 0 <= vx
                    && vx < row as i32
                    && 0 <= vy
                    && vy < col as i32
                    && !visited[vx as usize][vy as usize]
                {
                    ret[vx as usize][vy as usize] = high;
                    visited[vx as usize][vy as usize] = true;
                    queue.push_back((vx as usize, vy as usize));
                }
            }
        }
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::highest_peak;
    #[test]
    fn test_highest_peak() {
        assert_eq!(
            vec![vec![1, 0], vec![2, 1]],
            highest_peak(vec![vec![0, 1], vec![0, 0]])
        )
    }
}
