/**
 * setMatrixZeroes <https://leetcode.cn/problems/set-matrix-zeroes/>
 *
 */

function setMatrixZeroes1(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}

function setMatrixZeroes2(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  let flagColZero = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagColZero = true;
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (flagColZero) {
      matrix[i][0] = 0;
    }
  }
}

export { setMatrixZeroes1, setMatrixZeroes2 };
