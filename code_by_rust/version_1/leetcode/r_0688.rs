/**
 * https://leetcode-cn.com/problems/knight-probability-in-chessboard/
 * 在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。行和列是 从 0 开始 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。
 * 每次骑士要移动时，它都会随机从8种可能的移动中选择一种(即使棋子会离开棋盘)，然后移动到那里。
 * 骑士继续移动，直到它走了 k 步或离开了棋盘。
 * 返回 骑士在棋盘停止移动后仍留在棋盘上的概率 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/knight-probability-in-chessboard
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
pub fn knight_probability(n: i32, k: i32, row: i32, column: i32) -> f64 {
    let (n, k, row, column) = (n as usize, k as usize, row as usize, column as usize);
    let mut dp = vec![vec![vec![0.0; n]; n]; k + 1];
    for step in 0..=k {
        for i in 0..n as i32 {
            for j in 0..n as i32 {
                if step == 0 {
                    dp[step][i as usize][j as usize] = 1.0;
                } else {
                    for (x, y) in [
                        (i + 2, j + 1),
                        (i + 2, j - 1),
                        (i - 2, j + 1),
                        (i - 2, j - 1),
                        (i + 1, j + 2),
                        (i + 1, j - 2),
                        (i - 1, j + 2),
                        (i - 1, j - 2),
                    ] {
                        if 0 <= x && x < n as i32 && 0 <= y && y < n as i32 {
                            dp[step][i as usize][j as usize] +=
                                dp[step - 1][x as usize][y as usize] / 8.0;
                        }
                    }
                }
            }
        }
    }
    dp[k][row][column]
}

#[cfg(test)]
mod tests {
    use super::knight_probability;
    #[test]
    fn test_knight_probability() {
        assert_eq!(0.0625, knight_probability(3, 2, 0, 0));
        assert_eq!(0.25, knight_probability(3, 1, 1, 2));
        assert_eq!(0.11734, knight_probability(10, 13, 5, 3));
    }
}
