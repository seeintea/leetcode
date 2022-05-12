/**
 * https://leetcode.cn/problems/delete-columns-to-make-sorted/
 * Delete Columns to Make Sorted
 * You are given an array of n strings strs, all of the same length.
 * The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:
 * abc
 * bce
 * cae
 * You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.
 * Return the number of columns that you will delete.
 */

function minDeletionSize(strs: string[]): number {
  let ret = 0;
  const row = strs.length;
  const col = strs[0].length;
  for (let i = 0; i < col; i += 1) {
    for (let j = 1; j < row; j += 1) {
      if (strs[j - 1][i] > strs[j][i]) {
        ret += 1;
        break;
      }
    }
  }
  return ret;
}

export default minDeletionSize;
