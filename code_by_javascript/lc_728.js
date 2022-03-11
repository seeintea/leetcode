/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/self-dividing-numbers/
 * @description 自除数
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * @result 执行用时：80 ms | 内存消耗：40.8 MB
 */
var selfDividingNumbers_v1 = function (left, right) {
  const result = []
  for (let i = left; i <= right; i++) {
    const temp = String(i).split("")
    if (temp.indexOf("0") !== -1) {
      continue
    }
    const isAim = temp.every(v => i % v === 0)
    if (isAim) {
      result.push(i)
    }
  }
  return result
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * @result 执行用时：60 ms | 内存消耗：37.9 MB
 */
var selfDividingNumbers_v2 = function (left, right) {
  const result = []
  for (let i = left; i <= right; i++) {
    let temp = i, flag = 0
    while (temp > 0) {
      const mod = temp % 10
      if (mod === 0 || i % mod !== 0) {
        flag = 1
        break
      }
      temp = Math.floor(temp / 10)
    }
    if (flag === 0) {
      result.push(i)
    }
  }
  return result
}



console.log(selfDividingNumbers_v2(1, 22));