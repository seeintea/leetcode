/**
 * https://leetcode-cn.com/problems/erect-the-fence/
 * 安装栅栏
 * 在一个二维的花园中，有一些用 (x, y) 坐标表示的树。由于安装费用十分昂贵，你的任务是先用最短的绳子围起所有的树。只有当所有的树都被绳子包围时，花园才能围好栅栏。你需要找到正好位于栅栏边界上的树的坐标。
 */

const cross = (p: number[], q: number[], r: number[]) => {
  return (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0]);
};

function outerTrees(trees: number[][]): number[][] {
  const len = trees.length;
  if (len < 4) {
    return trees;
  }
  let leftMost = 0;
  for (let i = 0; i < len; i++) {
    if (trees[i][0] < trees[leftMost][0]) {
      leftMost = i;
    }
  }
  const ret = [];
  const visit = new Array(len).fill(0);
  let p = leftMost;
  do {
    let q = (p + 1) % len;
    for (let r = 0; r < len; r++) {
      /* 如果 r 在 pq 的右侧，则 q = r */
      if (cross(trees[p], trees[q], trees[r]) < 0) {
        q = r;
      }
    }
    /* 是否存在点 i, 使得 p 、q 、i 在同一条直线上 */
    for (let i = 0; i < len; i++) {
      if (visit[i] || i === p || i === q) {
        continue;
      }
      if (cross(trees[p], trees[q], trees[i]) === 0) {
        ret.push(trees[i]);
        visit[i] = true;
      }
    }
    if (!visit[q]) {
      ret.push(trees[q]);
      visit[q] = true;
    }
    p = q;
  } while (p !== leftMost);
  return ret;
}

export default outerTrees;
