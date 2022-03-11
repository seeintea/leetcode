use std::collections::VecDeque;

pub fn num_enclaves(grid: Vec<Vec<i32>>) -> i32 {
    let mut ret = 0;
    let mut queue = VecDeque::new();
    let mut visited = vec![vec![false; grid[0].len()]; grid.len()];
    for i in 0..grid.len() {
        for j in 0..grid[0].len() {
            if grid[i][j] == 0 {
                continue;
            }
            ret += 1;
            // 在边界的陆地
            if i == 0 || i == grid.len() - 1 || j == 0 || j == grid[0].len() - 1 {
                queue.push_back((i, j));
                visited[i][j] = true;
            }
        }
    }
    while !queue.is_empty() {
        let (i, j) = queue.pop_front().unwrap();
        ret -= 1;
        for (x, y) in [(1 as i32, 0 as i32), (-1, 0), (0, 1), (0, -1)] {
            let vx = i as i32 + x;
            let vy = j as i32 + y;
            if 0 <= vx
                && vx < grid.len() as i32
                && 0 <= vy
                && vy < grid[0].len() as i32
                && !visited[vx as usize][vy as usize]
                && grid[vx as usize][vy as usize] == 1
            {
                queue.push_back((vx as usize, vy as usize));
                visited[vx as usize][vy as usize] = true;
            }
        }
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::num_enclaves;
    #[test]
    fn test_num_enclaves() {
        assert_eq!(
            3,
            num_enclaves(vec![
                vec![0, 0, 0, 0],
                vec![1, 0, 1, 0],
                vec![0, 1, 1, 0],
                vec![0, 0, 0, 0],
            ])
        )
    }
}
