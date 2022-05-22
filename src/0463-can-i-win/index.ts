/**
 * https://leetcode.cn/problems/can-i-win/
 * Can I Win
 * In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.
 * What if we change the game so that players cannot re-use integers?
 * For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100.
 * Given two integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise, return false. Assume both players play optimally.
 */

function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  const memo = new Map();
  const dfs = (
    maxChoosableInteger: number,
    usedNumber: number,
    desiredTotal: number,
    currentTotal: number
  ): boolean => {
    if (!memo.has(usedNumber)) {
      let res = false;
      for (let i = 0; i < maxChoosableInteger; i += 1) {
        if (((usedNumber >> i) & 1) === 0) {
          if (i + 1 + currentTotal >= desiredTotal) {
            res = true;
            break;
          }
          if (!dfs(maxChoosableInteger, usedNumber | (1 << i), desiredTotal, currentTotal + i + 1)) {
            res = true;
            break;
          }
        }
      }
      memo.set(usedNumber, res);
    }
    return memo.get(usedNumber);
  };

  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
    return false;
  }
  return dfs(maxChoosableInteger, 0, desiredTotal, 0);
}

export default canIWin;
