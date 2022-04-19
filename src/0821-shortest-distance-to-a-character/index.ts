/**
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * 字符的最短距离
 * 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
 * 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
 * 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
 */

function shortestToChar(s: string, c: string): number[] {
  const len = s.length;
  const ret = new Array(len).fill(0);
  let cur = -len;
  for (let i = 0; i < len; i += 1) {
    if (s[i] === c) {
      cur = i;
    }
    ret[i] = i - cur;
  }
  cur = 2 * len;
  for (let i = len - 1; 0 <= i; i -= 1) {
    if (s[i] === c) {
      cur = i;
    }
    ret[i] = Math.min(ret[i], cur - i);
  }
  return ret;
}

export default shortestToChar;
