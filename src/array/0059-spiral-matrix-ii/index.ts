/**
 * spiralMatrixIi <https://leetcode.cn/problems/spiral-matrix-ii/>
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 */

function generateMatrix(n: number): number[][] {
  const ret = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let [left, right, top, bottom] = [0, n - 1, 0, n - 1];
  let current = 1;
  const need_loop = true;
  while (need_loop) {
    for (let i = left; i <= right; i += 1) {
      ret[top][i] = current;
      current += 1;
    }
    top += 1;
    if (top > bottom) break;
    for (let i = top; i <= bottom; i += 1) {
      ret[i][right] = current;
      current += 1;
    }
    right -= 1;
    if (left > right) break;
    for (let i = right; i >= left; i -= 1) {
      ret[bottom][i] = current;
      current += 1;
    }
    bottom -= 1;
    if (top > bottom) break;
    for (let i = bottom; i >= top; i -= 1) {
      ret[i][left] = current;
      current += 1;
    }
    left += 1;
    if (left > right) break;
  }
  return ret;
}

export { generateMatrix };
