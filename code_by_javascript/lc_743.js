/**
 * @answer leviegu
 * @url https://leetcode-cn.com/problems/network-delay-time/
 * @description 网络延迟时间
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime_v1 = function (times, n, k) {
  const [graph, costs, parents, processed] = [{}, {}, {}, {}];
  // 获取基本数据
  for (let time of times) {
    graph[time[0]] = graph[time[0]] || {};
    graph[time[0]][time[1]] = time[2];
    parents[time[1]] = time[0];
  }
  // 不存在起点
  if (!graph[k]) {
    return -1;
  }

  for (let i = 1; i <= n; i++) {
    if (i !== k) {
      costs[i] = graph[k][i] !== undefined ? graph[k][i] : Infinity;
    }
  }

  // 找到花费最低的节点
  function getLowestNode(costs) {
    let [minCost, node] = [Infinity, null];
    for (let key of Object.keys(costs)) {
      if (costs[key] < minCost && !processed[key]) {
        node = +key;
        minCost = costs[+key];
      }
    }
    return node;
  }

  let node = getLowestNode(costs);

  while (node) {
    let [cost, neighbors] = [costs[node], graph[node] || {}];
    for (let key of Object.keys(neighbors)) {
      let newCost = neighbors[key] + cost;
      if (costs[key] > newCost) {
        costs[key] = newCost;
        parents[key] = node;
      }
    }
    processed[node] = true;
    node = getLowestNode(costs);
  }

  let res = 0;
  let num = 1;
  for (let key of Object.keys(costs)) {
    if (costs[key] < Infinity) {
      num++;
    }
    if (costs[key] > res) {
      res = costs[key];
    }
  }
  if (num !== n) {
    return -1;
  }
  return res;
};

var networkDelayTime_v2 = function (times, n, k) {
  let res = -1,
    dp = Array.from(new Array(n + 1), () => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  for (let i = 0; i < times.length; i += 1) {
    dp[times[i][0]][times[i][0]] = 0;
    dp[times[i][0]][times[i][1]] = times[i][2];
  }
  dp[k][k] = 0;
  for (let k = 1; k <= n; k += 1) {
    for (let i = 1; i <= n; i += 1) {
      for (let j = 1; j <= n; j += 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }
  for (let i = 1; i <= n; i += 1) {
    res = Math.max(res, dp[k][i]);
  }
  return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};


console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))