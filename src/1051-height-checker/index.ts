/**
 * https://leetcode.cn/problems/height-checker/
 * A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
 * You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
 * Return the number of indices where heights[i] != expected[i].
 */

function heightChecker(heights: number[]): number {
  const sorted = [...heights].sort((a, b) => a - b);
  const len = heights.length;
  let ret = 0;
  for (let i = 0; i < len; ++i) {
    if (heights[i] !== sorted[i]) {
      ret += 1;
    }
  }
  return ret;
}

export default heightChecker;
