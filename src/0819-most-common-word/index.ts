/**
 * https://leetcode-cn.com/problems/most-common-word/
 * 最常见的单词
 * 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。
 * 题目保证至少有一个词不在禁用列表中，而且答案唯一。
 * 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
 */

function mostCommonWord(paragraph: string, banned: string[]): string {
  const counts = new Map();
  const lowerParagraph = paragraph.toLowerCase();
  const len = lowerParagraph.length;
  let max = 0;
  let word = "";
  for (let i = 0; i <= len; i += 1) {
    const cur = lowerParagraph[i];
    if (i < len && cur >= "a" && cur <= "z") {
      word += cur;
    } else if (word.length > 0) {
      if (banned.indexOf(word) === -1) {
        const count = (counts.get(word) || 0) + 1;
        counts.set(word, count);
        max = Math.max(max, count);
      }
      word = "";
    }
  }
  let ret = "";
  for (const [word, count] of counts.entries()) {
    if (count === max) {
      ret = word;
      break;
    }
  }
  return ret;
}

export default mostCommonWord;
