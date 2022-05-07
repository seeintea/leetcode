/**
 * https://leetcode-cn.com/problems/minimum-genetic-mutation/
 * Minimum Genetic Mutation
 * A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.
 * Suppose we need to investigate a mutation from a gene string start to a gene string end where one mutation is defined as one single character changed in the gene string.
 * For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
 * There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.
 * Given the two gene strings start and end and the gene bank bank, return the minimum number of mutations needed to mutate from start to end. If there is no such a mutation, return -1.
 * Note that the starting point is assumed to be valid, so it might not be included in the bank.
 */

function minMutation(start: string, end: string, bank: string[]): number {
  const geneLen = start.length;
  const bankLen = bank.length;
  const valid = new Array(bankLen).fill(0).map((): number[] => []);
  let endIdx = -1;
  for (let i = 0; i < bankLen; i += 1) {
    if (end === bank[i]) {
      endIdx = i;
    }
    for (let j = i + 1; j < bankLen; j += 1) {
      let mutations = 0;
      for (let k = 0; k < geneLen; k += 1) {
        if (bank[i][k] !== bank[j][k]) {
          mutations += 1;
        }
        if (mutations > 1) break;
      }
      if (mutations === 1) {
        valid[i].push(j);
        valid[j].push(i);
      }
    }
  }
  if (endIdx === -1) return -1;
  const queue: number[] = [];
  const visited = new Array(bankLen).fill(0);
  let step = 1;
  for (let i = 0; i < bankLen; i += 1) {
    let mutations = 0;
    for (let j = 0; j < geneLen; j += 1) {
      if (start[j] !== bank[i][j]) {
        mutations += 1;
      }
      if (mutations > 1) break;
    }
    if (mutations === 1) {
      queue.push(i);
      visited[i] = true;
    }
  }
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i += 1) {
      const cur = queue.shift()!;
      if (cur === endIdx) return step;
      for (const next of valid[cur]) {
        if (visited[next]) continue;
        visited[next] = true;
        queue.push(next);
      }
    }
    step += 1;
  }
  return -1;
}

export default minMutation;
