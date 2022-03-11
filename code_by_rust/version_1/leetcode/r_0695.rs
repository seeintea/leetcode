/**
 * 给你一个大小为 m x n 的二进制矩阵 grid 。
 * 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
 * 岛屿的面积是岛上值为 1 的单元格的数目。
 * 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/max-area-of-island
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn max_area_of_island(grid: Vec<Vec<i32>>) -> i32 {
    let mut grid = grid;
    let mut ret = 0;
    for i in 0..grid.len() {
        for j in 0..grid[0].len() {
            if grid[i][j] == 0 {
                continue;
            }
            let mut cnt = 0;
            let mut stk = vec![(i, j)];
            grid[i][j] = 0;
            while let Some((x, y)) = stk.pop() {
                cnt += 1;
                for (i, j) in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)] {
                    if i < grid.len() && j < grid[0].len() && grid[i][j] == 1 {
                        stk.push((i, j));
                        grid[i][j] = 0;
                    }
                }
            }
            ret = ret.max(cnt);
        }
    }
    ret
}
