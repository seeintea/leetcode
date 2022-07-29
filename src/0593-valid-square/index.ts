/**
 * https://leetcode.cn/problems/valid-square/
 * 给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。
 * 点的坐标 pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。
 * 一个 有效的正方形 有四条等边和四个等角(90度角)。
 */

const calcCosine = (v1: number[], v2: number[]) => {
  return v1[0] * v2[0] + v1[1] * v2[1] === 0;
};

const checkMidPoint = (p1: number[], p2: number[], p3: number[], p4: number[]) => {
  return p1[0] + p2[0] === p3[0] + p4[0] && p1[1] + p2[1] === p3[1] + p4[1];
};

const checkLength = (v1: number[], v2: number[]) => {
  return v1[0] * v1[0] + v1[1] * v1[1] === v2[0] * v2[0] + v2[1] * v2[1];
};

const isEqual = (v1: number[], v2: number[]) => {
  return JSON.stringify(v1) === JSON.stringify(v2);
};

const help = (p1: number[], p2: number[], p3: number[], p4: number[]) => {
  const v1 = [p1[0] - p2[0], p1[1] - p2[1]];
  const v2 = [p3[0] - p4[0], p3[1] - p4[1]];
  if (checkMidPoint(p1, p2, p3, p4) && checkLength(v1, v2) && calcCosine(v1, v2)) {
    return true;
  }
  return false;
};

function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  if (isEqual(p1, p2)) {
    return false;
  }
  if (help(p1, p2, p3, p4)) {
    return true;
  }
  if (isEqual(p1, p3)) {
    return false;
  }
  if (help(p1, p3, p2, p4)) {
    return true;
  }
  if (isEqual(p1, p4)) {
    return false;
  }
  return help(p1, p4, p2, p3);
}

export default validSquare;
