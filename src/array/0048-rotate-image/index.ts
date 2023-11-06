/**
 * rotateImage <https://leetcode.cn/problems/rotate-image/>
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 */

function rotateImage(matrix: number[][]): void {
  const len = matrix.length;
  for (let i = 0; i < Math.floor(len / 2); i += 1) {
    for (let j = 0; j < Math.floor((len + 1) / 2); j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len - j - 1][i];
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1];
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1];
      matrix[j][len - i - 1] = temp;
    }
  }
}

export { rotateImage };
