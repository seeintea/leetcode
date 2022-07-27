/**
 * https://leetcode.cn/problems/fraction-addition-and-subtraction/
 * 给定一个表示分数加减运算的字符串 expression ，你需要返回一个字符串形式的计算结果。
 * 这个结果应该是不可约分的分数，即最简分数。 如果最终结果是一个整数，例如 2，你需要将它转换成分数形式，其分母为 1。所以在上述例子中, 2 应该被转换为 2/1。
 */
import { isDigit, getGCD } from "@/utils/lodash";

function fractionAddition(expression: string): string {
  let numerator = 0;
  let denominator = 1;
  let current = 0;
  const len = expression.length;

  while (current < len) {
    let numerator1 = 0;
    let flag = 1;
    if (expression[current] === "-" || expression[current] === "+") {
      flag = expression[current] === "-" ? -1 : 1;
      current += 1;
    }
    while (current < len && isDigit(expression[current])) {
      numerator1 = numerator1 * 10 + expression[current].charCodeAt(0) - "0".charCodeAt(0);
      current += 1;
    }
    numerator1 *= flag;
    current += 1;
    let denominator1 = 0;
    while (current < len && isDigit(expression[current])) {
      denominator1 = denominator1 * 10 + expression[current].charCodeAt(0) - "0".charCodeAt(0);
      current += 1;
    }
    //  x1/y1 + x2/y2 => x1*y2+x2*y1/y1*y2
    numerator = numerator * denominator1 + numerator1 * denominator;
    denominator *= denominator1;
  }

  if (numerator === 0) return "0/1";
  const g = getGCD(Math.abs(numerator), denominator);
  return `${Math.floor(numerator / g)}/${Math.floor(denominator / g)}`;
}

export default fractionAddition;
