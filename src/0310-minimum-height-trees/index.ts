/**
 * https://leetcode-cn.com/problems/minimum-height-trees/
 * 最小高度树
 * 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。
 * 给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。
 * 可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。
 * 请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。
 * 树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。
 */

function findLongestNode(cur: number, parent: number[], relation: number[][]): number {
  const len = relation.length;
  const dist = new Array(len).fill(-1);
  dist[cur] = 0;
  const dfs = (cur: number, dist: number[], parent: number[], relation: number[][]) => {
    for (const val of relation[cur]) {
      if (dist[val] < 0) {
        dist[val] = dist[cur] + 1;
        parent[val] = cur;
        dfs(val, dist, parent, relation);
      }
    }
  };
  dfs(cur, dist, parent, relation);
  let maxDist = 0;
  let node = -1;
  for (let idx = 0; idx < len; idx += 1) {
    if (dist[idx] > maxDist) {
      maxDist = dist[idx];
      node = idx;
    }
  }
  return node;
}

function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const ret = [];
  if (n === 1) {
    ret.push(0);
    return ret;
  }
  const relation = new Array(n).fill(0).map((): number[] => []);
  for (const edge of edges) {
    relation[edge[0]].push(edge[1]);
    relation[edge[1]].push(edge[0]);
  }
  const parent = new Array(n).fill(-1);
  const longestWithZero = findLongestNode(0, parent, relation);
  let longestWithPrev = findLongestNode(longestWithZero, parent, relation);
  const paths = [];
  parent[longestWithZero] = -1;
  while (longestWithPrev !== -1) {
    paths.push(longestWithPrev);
    longestWithPrev = parent[longestWithPrev];
  }
  const len = paths.length;
  if (len % 2 === 0) {
    ret.push(paths[Math.floor(len / 2) - 1]);
  }
  ret.push(paths[Math.floor(len / 2)]);
  return ret;
}

export default findMinHeightTrees;
