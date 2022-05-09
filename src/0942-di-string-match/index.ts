/**
 * https://leetcode.cn/problems/di-string-match/
 * DI String Match
 * A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
 * s[i] == 'I' if perm[i] < perm[i + 1], and
 * s[i] == 'D' if perm[i] > perm[i + 1].
 * Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
 */

function diStringMatch(s: string): number[] {
  const len = s.length;
  let min = 0;
  let max = len;
  const ret = [];
  for (let i = 0; i < len; i += 1) {
    let val;
    if (s[i] === "I") {
      val = min;
      min += 1;
    } else {
      val = max;
      max -= 1;
    }
    ret.push(val);
  }
  ret.push(min);
  return ret;
}

export default diStringMatch;
