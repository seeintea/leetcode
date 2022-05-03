/**
 * https://leetcode-cn.com/problems/reorder-data-in-log-files/
 * Reorder Data in Log Files
 * You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.
 * There are two types of logs:
 * Letter-logs: All words (except the identifier) consist of lowercase English letters.
 * Digit-logs: All words (except the identifier) consist of digits.
 * Reorder these logs so that:
 * The letter-logs come before all digit-logs.
 * The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
 * The digit-logs maintain their relative ordering.
 * Return the final order of the logs.
 */

function reorderLogFiles(logs: string[]): string[] {
  const [stringLogs, numberLogs]: [string[], string[]] = [[], []];
  const distReg = /^[\w\d]+(\s\d+)+$/;
  for (const log of logs) {
    if (distReg.test(log)) {
      numberLogs.push(log);
    } else {
      stringLogs.push(log);
    }
  }
  const compReg = /^([\w\d]+)((?:\s\w+)+)$/;
  stringLogs.sort((a, b) => {
    const [a1, b1] = [a.match(compReg)!, b.match(compReg)!];
    return (a1[2] === b1[2] ? a1[1] < b1[1] : a1[2] < b1[2]) ? -1 : 1;
  });
  return stringLogs.concat(numberLogs);
}

export default reorderLogFiles;
