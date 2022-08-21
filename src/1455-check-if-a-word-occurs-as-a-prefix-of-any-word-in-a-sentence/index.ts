/**
 * https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 * 给你一个字符串 sentence 作为句子并指定检索词为 searchWord ，其中句子由若干用 单个空格 分隔的单词组成。请你检查检索词 searchWord 是否为句子 sentence 中任意单词的前缀。
 * 如果 searchWord 是某一个单词的前缀，则返回句子 sentence 中该单词所对应的下标（下标从 1 开始）。如果 searchWord 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。如果 searchWord 不是任何单词的前缀，则返回 -1 。
 * 字符串 s 的 前缀 是 s 的任何前导连续子字符串。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function isPrefix(sentence: string, searchWord: string, start: number, end: number): boolean {
  const len = searchWord.length;
  for (let idx = 0; idx < len; idx += 1) {
    if (start + idx >= end || sentence[start + idx] !== searchWord[idx]) {
      return false;
    }
  }
  return true;
}

function isPrefixOfWord(sentence: string, searchWord: string): number {
  const len = sentence.length;
  let idx = 1,
    start = 0,
    end = 0;
  while (start < len) {
    while (end < len && sentence[end] !== " ") {
      end += 1;
    }
    if (isPrefix(sentence, searchWord, start, end)) {
      return idx;
    }
    idx += 1;
    end += 1;
    start = end;
  }
  return -1;
}

export default isPrefixOfWord;
