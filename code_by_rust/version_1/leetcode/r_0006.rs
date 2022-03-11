/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 *  比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 * 请你实现这个将字符串进行指定行数变换的函数：
 * string convert(string s, int numRows);
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/zigzag-conversion
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn convert(s: String, num_rows: i32) -> String {
    let len = s.len();
    if len as i32 <= num_rows || num_rows == 1 {
        return s;
    }
    let mut put_dir = vec![String::new(); num_rows as usize];
    let mut col = 0;
    let change_dic = num_rows * 2 - 2;
    for (idx, ch) in s.char_indices() {
        put_dir[col].push(ch);
        if ((idx % change_dic as usize) as i32) < num_rows - 1 {
            col += 1;
        } else {
            col -= 1;
        }
    }
    let mut ret = String::new();
    put_dir.iter().for_each(|s| ret += s);
    ret
}

#[cfg(test)]
mod tests {
    use super::convert;
    #[test]
    fn test_convert() {
        assert_eq!(
            String::from("PINALSIGYAHRPI"),
            convert(String::from("PAYPALISHIRING"), 4)
        );
    }
}
