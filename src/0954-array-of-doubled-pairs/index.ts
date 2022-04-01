/**
 * https://leetcode-cn.com/problems/array-of-doubled-pairs/
 * 二倍数对数组
 * 给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。
 */

function canReorderDoubled(arr: number[]): boolean {
  const map: Map<number, number> = new Map();
  for (const val of arr) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  if ((map.get(0) || 0) % 2 !== 0) {
    return false;
  }
  const filterVal = [];
  for (const key of map.keys()) {
    filterVal.push(key);
  }
  // make sort like [-2, 2, -4, 4]
  filterVal.sort((prev, next) => Math.abs(prev) - Math.abs(next));
  for (const val of filterVal) {
    if ((map.get(2 * val) || 0) < map.get(val)!) {
      return false;
    }
    map.set(2 * val, (map.get(2 * val) || 0) - map.get(val)!);
  }
  return true;
}

export default canReorderDoubled;
