pub fn dfs(x: usize, y: usize, grid: &mut Vec<Vec<i32>>, visited: &mut Vec<Vec<bool>>) -> i32 {
    if grid[x][y] == 0 {
        return 0;
    }
    let mut ret = 0;
    let mut path = 0;
    for (nx, ny) in [(-1, 0), (1, 0), (0, -1), (0, 1)] {
        let vx = nx + x as i32;
        let vy = ny + y as i32;
        if vx < 0
            || vy < 0
            || (grid.len() as i32) <= vx
            || (grid[0].len() as i32) <= vy
            || grid[vx as usize][vy as usize] <= 0
        {
            continue;
        }
        let temp = grid[x][y];
        grid[x][y] = 0;
        ret = ret.max(dfs(vx as usize, vy as usize, grid, visited));
        grid[x][y] = temp;
        path += 1;
    }
    if path >= 2 {
        visited[x][y] = true;
    }
    grid[x][y] + ret
}

pub fn get_maximum_gold(grid: Vec<Vec<i32>>) -> i32 {
    let (rows, cols) = (grid.len(), grid[0].len());
    let mut grid = grid;
    let mut visited = vec![vec![false; cols]; rows];
    let mut ret = 0;
    for i in 0..rows {
        for j in 0..cols {
            if visited[i][j] {
                continue;
            }
            ret = ret.max(dfs(i, j, &mut grid, &mut visited));
        }
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::get_maximum_gold;
    #[test]
    fn test_get_maximum_gold() {
        assert_eq!(
            24,
            get_maximum_gold(vec![vec![0, 6, 0], vec![5, 8, 7], vec![0, 9, 0]])
        )
    }
}
