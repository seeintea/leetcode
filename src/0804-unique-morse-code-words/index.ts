/**
 * https://leetcode-cn.com/problems/unique-morse-code-words/
 * 唯一摩尔斯密码词
 * 给你一个字符串数组 words ，每个单词可以写成每个字母对应摩尔斯密码的组合。
 * 例如，"cab" 可以写成 "-.-..--..." ，(即 "-.-." + ".-" + "-..." 字符串的结合)。我们将这样一个连接过程称作 单词翻译 。
 * 对 words 中所有单词进行单词翻译，返回不同 单词翻译 的数量。
 */

const MORSE = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

function uniqueMorseRepresentations(words: string[]): number {
  const ret = new Set();
  const a = "a".charCodeAt(0);
  for (const word of words) {
    let code = "";
    for (const ch of word) {
      code += MORSE[ch.charCodeAt(0) - a];
    }
    ret.add(code);
  }
  return ret.size;
}

export default uniqueMorseRepresentations;
