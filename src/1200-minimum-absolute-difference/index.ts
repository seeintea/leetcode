/**
 * https://leetcode.cn/problems/minimum-absolute-difference/
 *
 */

function minimumAbsDifference(arr: number[]): number[][] {
  const len = arr.length;
  arr.sort((a, b) => a - b);
  let best = Number.MAX_VALUE;
  let ret: number[][] = [];
  for (let i = 0; i < len - 1; ++i) {
    const cur = arr[i + 1] - arr[i];
    if (cur < best) {
      best = cur;
      ret = [[arr[i], arr[i + 1]]];
    } else if (cur === best) {
      ret.push([arr[i], arr[i + 1]]);
    }
  }
  return ret;
}

export default minimumAbsDifference;
