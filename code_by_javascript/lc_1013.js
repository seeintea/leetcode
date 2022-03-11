/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
 * @description 将数组分成和相等的三个部分
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 * @result 执行用时：92 ms | 内存消耗：42.5 MB
 */
var canThreePartsEqualSum_v1 = function (arr) {
  const sum = arr.reduce((p, n) => p + n)
  const average = sum / 3
  if (average % 1 !== 0) {
    return false
  }
  const len = arr.length
  let i = 0, current = 0
  while (i < len) {
    current += arr[i]
    if (current === average) {
      break
    }
    i++
  }
  let j = i + 1
  current = 0
  while (j < len) {
    current += arr[j++]
    if (current === average && j < len) {
      return true
    }
  }
  return false
};

/**
 * @param {number[]} arr
 * @return {boolean}
 * @result 执行用时：84 ms | 内存消耗：42.6 MB
 */
var canThreePartsEqualSum_v2 = function (arr) {
  const sum = arr.reduce((p, n) => p + n)
  const average = sum / 3
  if (average % 1 !== 0) {
    return false
  }
  let target = 0, flag = 3, len = arr.length
  for (let i = 0; i < len; i += 1) {
    target += arr[i]
    if (target === average) {
      target = 0
      flag -= 1
    }
  }
  return flag <= 0
}
