/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/letter-case-permutation/
 * @description 字母大小写全排列
 */

/**
 * @param {string} s
 * @return {string[]}
 * @result 执行用时：72 ms | 内存消耗：40.4 MB
 */
var letterCasePermutation_v1 = function (s) {
  const input = s.split('')
  const first = input[0]
  let result = []
  !isNaN(parseInt(first)) ? result.push(first) : (result.push(first.toUpperCase()), result.push(first.toLowerCase()))
  input.shift()
  input.forEach((val) => {
    if (!isNaN(parseInt(val))) {
      result = result.map(v => `${v}${val}`)
    } else {
      const upper = val.toUpperCase()
      const lower = val.toLowerCase()
      let clone = [...result]
      result = result.map(v => `${v}${upper}`)
      clone = clone.map(v => `${v}${lower}`)
      result = result.concat(clone)
    }
  })
  return result
};

/**
 * @param {string} s
 * @return {string[]}
 * @result 68 ms | 内存消耗：40.4 MB
 */
var letterCasePermutation_v2 = function (s) {
  const result = []
  const dfs = (idx, string) => {
    if (idx === s.length) {
      result.push(string)
      return
    }
    const temp = s[idx].charCodeAt()
    if (temp >= 65 && temp <= 90 || temp >= 97 && temp <= 122) {
      dfs(idx + 1, `${string}${s[idx]}`)
      dfs(idx + 1, `${string}${String.fromCharCode(temp ^ 32)}`)
    } else {
      dfs(idx + 1, `${string}${s[idx]}`)
    }
  }
  dfs(0, '')
  return result
}

console.log(letterCasePermutation_v2('a1b1'));