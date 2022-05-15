/**
 * https://leetcode.cn/problems/largest-triangle-area/
 * Largest Triangle Area
 * Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.
 */

const triangleArea = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): number => {
  return 0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2);
};

function largestTriangleArea(points: number[][]): number {
  const n = points.length;
  let ret = 0.0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        ret = Math.max(
          ret,
          triangleArea(points[i][0], points[i][1], points[j][0], points[j][1], points[k][0], points[k][1])
        );
      }
    }
  }
  return ret;
}

export default largestTriangleArea;
