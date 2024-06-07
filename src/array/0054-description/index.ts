/**
 * description <https://leetcode.cn/problems/spiral-matrix/description/>
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

// simulate
function spiralOrder(matrix: number[][]): number[] {
  const ret: number[] = [];
  if (!matrix.length) return ret;
  let [left, right, top, bottom] = [0, matrix[0].length - 1, 0, matrix.length - 1];
  const need_loop = true;
  while (need_loop) {
    for (let i = left; i <= right; i += 1) ret.push(matrix[top][i]);
    top += 1;
    if (top > bottom) break;
    for (let i = top; i <= bottom; i += 1) ret.push(matrix[i][right]);
    right -= 1;
    if (left > right) break;
    for (let i = right; i >= left; i -= 1) ret.push(matrix[bottom][i]);
    bottom -= 1;
    if (top > bottom) break;
    for (let i = bottom; i >= top; i -= 1) ret.push(matrix[i][left]);
    left += 1;
    if (left > right) break;
  }
  return ret;
}

export { spiralOrder };
