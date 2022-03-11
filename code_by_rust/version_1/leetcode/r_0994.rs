use std::collections::VecDeque;

/**
 * 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。
 * 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/rotting-oranges
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn oranges_rotting(grid: Vec<Vec<i32>>) -> i32 {
    let (rows, cols) = (grid.len(), grid[0].len());
    let mut visited = vec![vec![false; cols]; rows];
    let mut que = VecDeque::new();
    let mut good_oranges = 0;
    for i in 0..rows {
        for j in 0..cols {
            if grid[i][j] == 2 {
                visited[i][j] = true;
                que.push_back((i, j));
            } else if grid[i][j] == 1 {
                good_oranges += 1;
            }
        }
    }
    let mut ret = 0;
    while !que.is_empty() && good_oranges > 0 {
        ret += 1;
        for _ in 0..que.len() {
            let (i, j) = que.pop_front().unwrap();
            for (x, y) in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)] {
                if x < rows && y < cols && !visited[x][y] && grid[x][y] == 1 {
                    good_oranges -= 1;
                    visited[x][y] = true;
                    que.push_back((x, y));
                }
            }
        }
    }
    return if good_oranges > 0 { -1 } else { ret };
}

#[cfg(test)]
mod test {
    use super::oranges_rotting;
    #[test]
    fn test_oranges_rotting() {
        assert_eq!(
            4,
            oranges_rotting(vec![vec![2, 1, 1], vec![1, 1, 0], vec![0, 1, 1]])
        );
    }
}
