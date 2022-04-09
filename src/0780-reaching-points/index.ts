/**
 * https://leetcode-cn.com/problems/reaching-points/
 * 到达终点
 * 给定四个整数 sx , sy ，tx 和 ty，如果通过一系列的转换可以从起点 (sx, sy) 到达终点 (tx, ty)，则返回 true，否则返回 false。
 * 从点 (x, y) 可以转换到 (x, x+y)  或者 (x+y, y)。
 */

//! over memory limit
// function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
//   if (sx > tx || sy > ty) {
//     return false;
//   }
//   if (sx === tx && sy === ty) {
//     return true;
//   }
//   return reachingPoints(sx + sy, sy, tx, ty) || reachingPoints(sx, sx + sy, tx, ty);
// }

function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
  while (tx > sx && ty > sy && tx != ty) {
    if (tx > ty) {
      tx %= ty;
    } else {
      ty %= tx;
    }
  }
  if (tx === sx && ty === sy) {
    return true;
  } else if (tx === sx) {
    return ty > sy && (ty - sy) % tx === 0;
  } else if (ty === sy) {
    return tx > sx && (tx - sx) % ty === 0;
  } else {
    return false;
  }
}

export default reachingPoints;
