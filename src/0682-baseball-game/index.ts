/**
 * https://leetcode-cn.com/problems/baseball-game/
 *
 */

function calPoints(ops: string[]): number {
  const cache: number[] = [];
  ops.forEach((op) => {
    const len = cache.length;
    switch (op) {
      case "+": {
        cache.push(cache[len - 2] + cache[len - 1]);
        break;
      }
      case "D": {
        cache.push(cache[len - 1] * 2);
        break;
      }
      case "C": {
        cache.pop();
        break;
      }
      default: {
        cache.push(Number(op));
        break;
      }
    }
  });
  return cache.reduce((prev, next) => prev + next, 0);
}

export default calPoints;
