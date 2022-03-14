/**
 * https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists
 * 两个列表的最小索引总和
 * 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。
 */

function findRestaurant(list1: string[], list2: string[]): string[] {
  const idxMap = new Map();
  for (let i = 0; i < list1.length; i += 1) {
    idxMap.set(list1[i], i);
  }
  let ret: string[] = [];
  let maxIdx = Number.MAX_VALUE;
  for (let i = 0; i < list2.length; i += 1) {
    if (idxMap.has(list2[i])) {
      const j = idxMap.get(list2[i]);
      if (i + j < maxIdx) {
        ret = [list2[i]];
        maxIdx = i + j;
      } else if (i + j === maxIdx) {
        ret.push(list2[i]);
      }
    }
  }
  return ret;
}

export default findRestaurant;
