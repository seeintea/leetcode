/**
 * https://leetcode-cn.com/problems/longest-word-in-dictionary
 * 词典中最长的单词
 * 给出一个字符串数组words组成的一本英语词典。返回words中最长的一个单词，该单词是由words词典中其他单词逐步添加一个字母组成。
 * 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。
 */

function longestWord(words: string[]): string {
  words.sort((prev, next) => {
    if (prev.length !== next.length) {
      return prev.length - next.length;
    } else {
      return next.localeCompare(prev);
    }
  });
  let longest = "";
  const set: Set<string> = new Set();
  set.add("");
  words.forEach((word) => {
    if (set.has(word.slice(0, word.length - 1))) {
      set.add(word);
      longest = word;
    }
  });
  return longest;
}

export default longestWord;
