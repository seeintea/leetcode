/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * https://leetcode-cn.com/problems/the-time-when-the-network-becomes-idle
 * 网络空闲的时刻
 * 给你一个有 n个服务器的计算机网络，服务器编号为0到n - 1。同时给你一个二维整数数组edges，其中edges[i] = [ui, vi]表示服务器ui 和vi之间有一条信息线路，在一秒内它们之间可以传输任意数目的信息。再给你一个长度为 n且下标从0开始的整数数组patience。
 * 题目保证所有服务器都是 相通的，也就是说一个信息从任意服务器出发，都可以通过这些信息线路直接或间接地到达任何其他服务器
 * 编号为 0的服务器是 主服务器，其他服务器为 数据服务器。每个数据服务器都要向主服务器发送信息，并等待回复。信息在服务器之间按 最优线路传输，也就是说每个信息都会以 最少时间到达主服务器。主服务器会处理 所有新到达的信息并 立即按照每条信息来时的路线 反方向 发送回复信息。
 * 在 0秒的开始，所有数据服务器都会发送各自需要处理的信息。从第 1秒开始，每一秒最 开始时，每个数据服务器都会检查它是否收到了主服务器的回复信息（包括新发出信息的回复信息）：
 * 如果还没收到任何回复信息，那么该服务器会周期性重发信息。数据服务器i每patience[i]秒都会重发一条信息，也就是说，数据服务器i在上一次发送信息给主服务器后的 patience[i]秒 后会重发一条信息给主服务器。
 * 否则，该数据服务器不会重发信息
 * 当没有任何信息在线路上传输或者到达某服务器时，该计算机网络变为 空闲状态。
 * 请返回计算机网络变为 空闲状态的最早秒数。s
 */

function networkBecomesIdle(edges: number[][], patience: number[]): number {
  const graph: Map<number, number[]> = new Map();
  for (const [x, y] of edges) {
    if (graph.get(x)) {
      graph.get(x)!.push(y);
    } else {
      graph.set(x, [y]);
    }
    if (graph.get(y)) {
      graph.get(y)!.push(x);
    } else {
      graph.set(y, [x]);
    }
  }
  const queue = [0];
  const visited = new Set([0]);
  let idx = 0;
  let distance = 0;
  let ret = 0;
  while (idx < queue.length) {
    distance += 1;
    const len = queue.length;
    while (idx < len) {
      const temp = graph.get(queue[idx])!;
      idx += 1;
      for (const child of temp) {
        if (visited.has(child)) continue;
        visited.add(child);
        const idleTime = (((2 * distance - 1) / patience[child]) | 0) * patience[child] + 2 * distance + 1;
        if (idleTime > ret) ret = idleTime;
        queue.push(child);
      }
    }
  }
  return ret;
}

export default networkBecomesIdle;
