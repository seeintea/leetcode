/**
 * https://leetcode.cn/problems/one-away-lcci/
 * 面试题 01.05. One Away LCCI
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
 */

function oneEditAway(first: string, second: string): boolean {
  const firstSize = first.length;
  const secondSize = second.length;
  const diff = firstSize - secondSize;
  if (diff > 1 || diff < -1) return false;
  let change = 0;
  if (diff === 0) {
    for (let i = 0; i < firstSize; i += 1) {
      if (first[i] !== second[i]) change += 1;
    }
  } else if (diff < 0) {
    let diffIdx = 0;
    while (diffIdx < firstSize) {
      if (first[diffIdx] !== second[diffIdx]) break;
      diffIdx += 1;
    }
    change += 1;
    for (let i = diffIdx; i < firstSize; i += 1) {
      if (first[i] !== second[i + 1]) change += 1;
    }
  } else {
    let diffIdx = 0;
    while (diffIdx < firstSize) {
      if (first[diffIdx] !== second[diffIdx]) break;
      diffIdx += 1;
    }
    change += 1;
    for (let i = diffIdx; i < secondSize; i += 1) {
      if (first[i + 1] !== second[i]) change += 1;
    }
  }
  return change <= 1;
}

export default oneEditAway;
