/**
 * https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/
 * 寻找比目标字母大的最小字母
 * 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。
 * 在比较时，字母是依序循环出现的。举个例子：
 * 如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'
 *
 */

function nextGreatestLetter(letters: string[], target: string): string {
  const len = letters.length;
  if (target >= letters[len - 1]) {
    return letters[0];
  }
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return letters[left];
}

export default nextGreatestLetter;
