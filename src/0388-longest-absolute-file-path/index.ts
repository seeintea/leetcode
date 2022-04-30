/**
 * https://leetcode-cn.com/problems/longest-absolute-file-path/
 * 文件的最长绝对路径
 * 文件系统中的每个文件和文件夹都有一个唯一的 绝对路径 ，即必须打开才能到达文件/目录所在位置的目录顺序，所有路径用 '/' 连接。上面例子中，指向 file2.ext 的 绝对路径 是 "dir/subdir2/subsubdir2/file2.ext" 。每个目录名由字母、数字和/或空格组成，每个文件名遵循 name.extension 的格式，其中 name 和 extension由字母、数字和/或空格组成。
 * 给定一个以上述格式表示文件系统的字符串 input ，返回文件系统中 指向 文件 的 最长绝对路径 的长度 。 如果系统中没有文件，返回 0。
 */

function lengthLongestPath(input: string): number {
  const len = input.length;
  let cur = 0;
  let ret = 0;
  const level = new Array(len + 1).fill(0);
  while (cur < len) {
    let depth = 1;
    while (cur < len && input[cur] === "\t") {
      cur += 1;
      depth += 1;
    }
    let size = 0;
    let isFile = false;
    while (cur < len && input[cur] !== "\n") {
      if (input[cur] === ".") {
        isFile = true;
      }
      cur += 1;
      size += 1;
    }
    cur += 1;
    if (depth > 1) {
      size += level[depth - 1] + 1;
    }
    if (isFile) {
      ret = Math.max(ret, size);
    } else {
      level[depth] = size;
    }
  }
  return ret;
}

export default lengthLongestPath;
