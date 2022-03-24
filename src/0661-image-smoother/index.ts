/**
 * https://leetcode-cn.com/problems/image-smoother/
 * 图片平滑器
 * 图像平滑器 是大小为3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。
 * 每个单元格的平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。
 * 如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。
 */

function simulation(img: number[][]): number[][] {
  const rows = img.length;
  const cols = img[0].length;
  const ret = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      let sum = 0;
      let count = 0;
      for (let x = row - 1; x <= row + 1; x += 1) {
        for (let y = col - 1; y <= col + 1; y += 1) {
          if (x >= 0 && x < rows && y >= 0 && y < cols) {
            count += 1;
            sum += img[x][y];
          }
        }
      }
      ret[row][col] = Math.floor(sum / count);
    }
  }
  return ret;
}

function prefixSum(img: number[][]): number[][] {
  const rows = img.length;
  const cols = img[0].length;
  const sum = new Array(rows + 10).fill(0).map(() => new Array(cols + 10).fill(0));
  for (let row = 1; row <= rows; row += 1) {
    for (let col = 1; col <= cols; col += 1) {
      sum[row][col] = sum[row - 1][col] + sum[row][col - 1] - sum[row - 1][col - 1] + img[row - 1][col - 1];
    }
  }
  const ret = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const a = Math.max(0, row - 1);
      const b = Math.max(0, col - 1);
      const c = Math.min(rows - 1, row + 1);
      const d = Math.min(cols - 1, col + 1);
      const count = (c - a + 1) * (d - b + 1);
      const total = sum[c + 1][d + 1] - sum[a][d + 1] - sum[c + 1][b] + sum[a][b];
      ret[row][col] = Math.floor(total / count);
    }
  }
  return ret;
}

export { simulation, prefixSum };
