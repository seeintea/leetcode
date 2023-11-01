/**
 * diagonalTraverse <https://leetcode.cn/problems/diagonal-traverse/>
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 */

function diagonalTraverse(mat: number[][]): number[] {
  const row = mat.length,
    col = mat[0].length;
  const flatMat = new Array(row * col).fill(0);
  const line = row + col - 1;
  let position = 0;
  for (let i = 0; i < line; i += 1) {
    if (i % 2 === 1) {
      let x = i < row ? 0 : i - row + 1;
      let y = i < row ? i : row - 1;
      while (x < row && y >= 0) {
        flatMat[position] = mat[x][y];
        position += 1;
        x += 1;
        y -= 1;
      }
    } else {
      let x = i < row ? i : row - 1;
      let y = i < row ? 0 : i - row + 1;
      while (x >= 0 && y < col) {
        flatMat[position] = mat[x][y];
        position += 1;
        x -= 1;
        y += 1;
      }
    }
  }

  return flatMat;
}

export { diagonalTraverse };
