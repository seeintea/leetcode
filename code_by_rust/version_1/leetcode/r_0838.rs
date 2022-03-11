/**
 * https://leetcode-cn.com/problems/push-dominoes/
 * n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。
 * 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。
 * 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。
 * 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。
 * 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：
 * dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
 * dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
 * dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
 * 返回表示最终状态的字符串。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/push-dominoes
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn push_dominoes(dominoes: String) -> String {
    let len = dominoes.len();
    let mut idx = 0;
    let mut byte_dominoes = dominoes.as_bytes().to_vec();
    let mut left = b'L';
    while idx < len {
        let mut stand = idx;
        while stand < len && byte_dominoes[stand] == b'.' {
            stand += 1;
        }
        let right;
        if stand < len {
            right = byte_dominoes[stand];
        } else {
            right = b'R';
        }
        if left == right {
            while idx < stand {
                byte_dominoes[idx] = right;
                idx += 1;
            }
        } else if left == b'R' && right == b'L' {
            let mut end = stand - 1;
            while idx < end {
                byte_dominoes[idx] = b'R';
                byte_dominoes[end] = b'L';
                idx += 1;
                end -= 1;
            }
        }
        left = right;
        idx = stand + 1;
    }
    String::from_utf8(byte_dominoes).unwrap()
}

#[cfg(test)]
mod tests {
    use super::push_dominoes;
    #[test]
    fn test_push_dominoes() {
        assert_eq!(String::from("RR.L"), push_dominoes(String::from("RR.L")));
        assert_eq!(
            String::from("LL.RR.LLRRLL.."),
            push_dominoes(String::from(".L.R...LR..L.."))
        )
    }
}
