/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * @description 移动所有球到每个盒子所需的最小操作数
 */

/**
 * @param {string} boxes
 * @return {number[]}
 * @result  执行用时: 216 ms | 内存消耗: 41 MB
 */
var minOperations_v1 = function (boxes) {
  const box = boxes.split("");
  const result = Array(box.length).fill(0);
  const memo = []
  box.forEach((v, k) => {
    if (v === "1") {
      memo.push(k)
    }
  })
  for (let i = 0; i < result.length; i++) {
    memo.forEach(v => {
      if (v > i) {
        result[i] += (v - i)
      } else {
        result[i] += (i - v)
      }
    })
  }
  return result
};


/**
 * @param {string} boxes
 * @return {number[]}
 * @result  执行用时: 92 ms | 内存消耗: 41.5 MB
 */
var minOperations_v2 = function (boxes) {
  const box = boxes.split("")
  const result = []
  let left = 0, right = 0, sum = 0;
  for (let i = 1; i < box.length; i++) {
    const temp = box[i] === "1" ? 1 : 0;
    right += temp;
    sum += i * temp
  }
  result.push(sum)
  for (let i = 1; i < box.length; i++) {
    let temp = 0;
    if (box[i - 1] === "1") {
      left++
    }
    if (box[i] === "1") {
      right--
      temp = 1
    }
    result[i] = result[i - 1] + left - right - temp
  }
  return result
}

minOperations_v2("110")
