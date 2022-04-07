/**
 * https://leetcode-cn.com/problems/rotate-string/
 * 旋转字符串
 * 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。
 * s 的 旋转操作 就是将 s 最左边的字符移动到最右边。
 * 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
 */

function rotateString(s: string, goal: string): boolean {
  const m = s.length;
  const n = goal.length;
  if (m !== n) return false;
  for (let i = 0; i < m; i += 1) {
    let flag = true;
    for (let j = 0; j < n; j += 1) {
      if (s[(i + j) % n] !== goal[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
  }
  return false;
}

export default rotateString;
