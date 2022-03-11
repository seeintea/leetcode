/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/diagonal-traverse-ii/
 * @description 对角线遍历 II
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 * @result 超时
 */
var findDiagonalOrder_v1 = function (nums) {
  const temp = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (temp[i + j] === undefined) {
        temp[i + j] = []
      }
      temp[i + j].push(nums[i][j])
    }
  }
  let result = []
  for (let i = 0; i < temp.length; i++) {
    result = result.concat(temp[i].reverse())
  }
  return result
};

/**
 * @param {number[][]} nums
 * @return {number[]}
 * @result 执行用时：216 ms | 内存消耗：60.6 MB
 */
var findDiagonalOrder_v2 = function (nums) {
  const queue = [[0, 0]]
  const result = []
  while (queue.length !== 0) {
    const current = queue.pop()
    if (current[1] === 0 && current[0] + 1 < nums.length) {
      queue.unshift([current[0] + 1, current[1]])
    }
    if (current[1] + 1 < nums[current[0]].length) {
      queue.unshift([current[0], current[1] + 1])
    }
    result.push(nums[current[0]][current[1]])
  }
  return result
}
