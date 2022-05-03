/**
 * https://leetcode-cn.com/problems/tag-validator/
 * Tag Validator
 * Given a string representing a code snippet, implement a tag validator to parse the code and return whether it is valid.
 * A code snippet is valid if all the following rules hold:
 * The code must be wrapped in a valid closed tag. Otherwise, the code is invalid.
 * A closed tag (not necessarily valid) has exactly the following format : <TAG_NAME>TAG_CONTENT</TAG_NAME>. Among them, <TAG_NAME> is the start tag, and </TAG_NAME> is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is valid if and only if the TAG_NAME and TAG_CONTENT are valid.
 * A valid TAG_NAME only contain upper-case letters, and has length in range [1,9]. Otherwise, the TAG_NAME is invalid.
 * A valid TAG_CONTENT may contain other valid closed tags, cdata and any characters (see note1) EXCEPT unmatched <, unmatched start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the TAG_CONTENT is invalid.
 * A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.
 * A < is unmatched if you cannot find a subsequent >. And when you find a < or </, all the subsequent characters until the next > should be parsed as TAG_NAME (not necessarily valid).
 * The cdata has the following format : <![CDATA[CDATA_CONTENT]]>. The range of CDATA_CONTENT is defined as the characters between <![CDATA[ and the first subsequent ]]>.
 * CDATA_CONTENT may contain any characters. The function of cdata is to forbid the validator to parse CDATA_CONTENT, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as regular characters.
 */

function isValid(code: string): boolean {
  const len = code.length;
  const tags = [];
  let idx = 0;
  while (idx < len) {
    if (code[idx] === "<") {
      if (idx === len - 1) return false;
      if (code[idx + 1] === "/") {
        const closed = code.indexOf(">", idx);
        if (closed < 0) return false;
        const tagName = code.slice(idx + 2, closed);
        if (tagName.length === 0 || tags[tags.length - 1] !== tagName) return false;
        tags.pop();
        idx = closed + 1;
        if (tags.length === 0 && idx !== len) return false;
      } else if (code[idx + 1] === "!") {
        if (tags.length === 0) return false;
        if (idx + 9 > len) return false;
        const cdata = code.slice(idx + 2, idx + 9);
        if ("[CDATA[" !== cdata) return false;
        const closed = code.indexOf("]]>", idx);
        if (closed < 0) return false;
        idx = closed + 1;
      } else {
        const closed = code.indexOf(">", idx);
        if (closed < 0) return false;
        const tagName = code.slice(idx + 1, closed);
        if (tagName.length < 1 || tagName.length > 9) return false;
        for (let i = 0; i < tagName.length; i += 1) {
          if (!(tagName[i] >= "A" && tagName[i] <= "Z")) return false;
        }
        tags.push(tagName);
        idx = closed + 1;
      }
    } else {
      if (tags.length === 0) return false;
      idx += 1;
    }
  }
  return tags.length === 0;
}

export default isValid;
