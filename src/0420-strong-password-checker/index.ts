/**
 * https://leetcode-cn.com/problems/strong-password-checker/
 * 强密码检验器
 * 如果一个密码满足下述所有条件，则认为这个密码是强密码：
 * 由至少 6 个，至多 20 个字符组成。
 * 至少包含 一个小写 字母，一个大写 字母，和 一个数字 。
 * 同一字符 不能 连续出现三次 (比如 "...aaa..." 是不允许的, 但是 "...aa...a..." 如果满足其他条件也可以算是强密码)。
 * 给你一个字符串 password ，返回 将 password 修改到满足强密码条件需要的最少修改步数。如果 password 已经是强密码，则返回 0 。
 * 在一步修改操作中，你可以：
 * 插入一个字符到 password ，
 * 从 password 中删除一个字符，或
 * 用另一个字符来替换 password 中的某个字符。
 */

function isLowerCase(ch: string): boolean {
  return "a" <= ch && ch <= "z";
}

function isUpperCase(ch: string): boolean {
  return "A" <= ch && ch <= "Z";
}

function isDigit(ch: string): boolean {
  return parseFloat(ch).toString() === "NaN" ? false : true;
}

function strongPasswordChecker(password: string): number {
  const len = password.length;
  let hasLower = 0;
  let hasUpper = 0;
  let hasDigit = 0;
  for (let i = 0; i < len; ++i) {
    const ch = password[i];
    if (isLowerCase(ch)) {
      hasLower = 1;
    } else if (isUpperCase(ch)) {
      hasUpper = 1;
    } else if (isDigit(ch)) {
      hasDigit = 1;
    }
  }
  const categories = hasLower + hasUpper + hasDigit;
  if (len < 6) {
    return Math.max(6 - len, 3 - categories);
  }
  if (len <= 20) {
    let replace = 0;
    let cnt = 0;
    let cur = "#";
    for (let i = 0; i < len; i += 1) {
      const ch = password[i];
      if (ch === cur) {
        ++cnt;
      } else {
        replace += Math.floor(cnt / 3);
        cnt = 1;
        cur = ch;
      }
    }
    replace += Math.floor(cnt / 3);
    return Math.max(replace, 3 - categories);
  }
  let replace = 0;
  let remove = len - 20;
  let rm2 = 0;
  let cnt = 0;
  let cur = "#";
  for (let i = 0; i < len; ++i) {
    const ch = password[i];
    if (ch === cur) {
      ++cnt;
    } else {
      if (remove > 0 && cnt >= 3) {
        if (cnt % 3 === 0) {
          --remove;
          --replace;
        } else if (cnt % 3 === 1) {
          ++rm2;
        }
      }
      replace += Math.floor(cnt / 3);
      cnt = 1;
      cur = ch;
    }
  }
  if (remove > 0 && cnt >= 3) {
    if (cnt % 3 === 0) {
      --remove;
      --replace;
    } else if (cnt % 3 === 1) {
      ++rm2;
    }
  }
  replace += Math.floor(cnt / 3);
  const use2 = Math.min(Math.min(replace, rm2), Math.floor(remove / 2));
  replace -= use2;
  remove -= use2 * 2;
  const use3 = Math.min(replace, Math.floor(remove / 3));
  replace -= use3;
  remove -= use3 * 3;
  return len - 20 + Math.max(replace, 3 - categories);
}

export default strongPasswordChecker;
