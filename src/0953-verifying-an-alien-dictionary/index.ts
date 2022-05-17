/**
 * https://leetcode.cn/problems/verifying-an-alien-dictionary/
 * Verifying an Alien Dictionary
 * n an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
 */

function isAlienSorted(words: string[], order: string): boolean {
  const index = new Array(26).fill(0);
  const charACode = "a".charCodeAt(0);
  for (let i = 0; i < order.length; i += 1) {
    index[order[i].charCodeAt(0) - charACode] = i;
  }
  for (let i = 1; i < words.length; i += 1) {
    let valid = false;
    for (let j = 0; j < words[i - 1].length && j < words[i].length; j += 1) {
      const prev = index[words[i - 1][j].charCodeAt(0) - charACode];
      const curr = index[words[i][j].charCodeAt(0) - charACode];
      if (prev < curr) {
        valid = true;
        break;
      } else if (prev > curr) {
        return false;
      }
    }
    if (!valid && words[i - 1].length > words[i].length) {
      return false;
    }
  }
  return true;
}

export default isAlienSorted;
