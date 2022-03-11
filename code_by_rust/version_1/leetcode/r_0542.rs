use std::collections::VecDeque;

/**
 * 给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。
 * 两个相邻元素间的距离为 1 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/01-matrix
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn update_matrix(mat: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut ret = mat.clone();
    let mut visited = vec![vec![false; mat[0].len()]; mat.len()];
    let mut que = VecDeque::new();
    for i in 0..mat.len() {
        for j in 0..mat[0].len() {
            if mat[i][j] == 0 {
                que.push_back((i, j));
                visited[i][j] = true;
            }
        }
    }
    while !que.is_empty() {
        for _ in 0..que.len() {
            let (i, j) = que.pop_front().unwrap();
            for (r, c) in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)] {
                if r < mat.len() && c < mat[0].len() && visited[r][c] == false {
                    visited[r][c] = true;
                    ret[r][c] = ret[i][j] + 1;
                    que.push_back((r, c));
                }
            }
        }
    }
    ret
}
