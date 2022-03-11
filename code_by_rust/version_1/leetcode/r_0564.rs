/**
 * 给定一个表示整数的字符串 n ，返回与它最近的回文整数（不包括自身）。如果不止一个，返回较小的那个。
 * “最近的”定义为两个整数差的绝对值最小。
 * https://leetcode-cn.com/problems/find-the-closest-palindrome/
 */
pub fn nearest_palindromic(n: String) -> String {
    fn get_palindromic(n: i64) -> i64 {
        let str = n.to_string();
        let digits = str.as_bytes();
        let mut v = Vec::from(&digits[..digits.len() / 2]);
        if digits.len() % 2 == 1 {
            v.push(digits[digits.len() / 2]);
        }
        for i in digits[..digits.len() / 2].iter().rev() {
            v.push(*i);
        }
        String::from_utf8(v).unwrap().parse::<i64>().unwrap()
    }
    let n_digit = n.parse::<i64>().unwrap();
    let c_digit = get_palindromic(n_digit);

    if c_digit < n_digit {
        let bigger = get_palindromic(
            n_digit - n_digit % (10i64.pow(n.len() as u32 / 2)) + 10i64.pow(n.len() as u32 / 2),
        );
        if n_digit - c_digit <= bigger - n_digit {
            c_digit.to_string()
        } else {
            bigger.to_string()
        }
    } else if n_digit < c_digit {
        let smaller = get_palindromic(n_digit - n_digit % (10i64.pow(n.len() as u32 / 2)) - 1);
        if n_digit - smaller <= c_digit - n_digit {
            smaller.to_string()
        } else {
            c_digit.to_string()
        }
    } else {
        let bigger = get_palindromic(
            n_digit - n_digit % (10i64.pow(n.len() as u32 / 2)) + 10i64.pow(n.len() as u32 / 2),
        );
        let smaller = get_palindromic(n_digit - n_digit % (10i64.pow(n.len() as u32 / 2)) - 1);
        if n_digit - smaller <= bigger - n_digit {
            smaller.to_string()
        } else {
            bigger.to_string()
        }
    }
}

#[cfg(test)]
mod test {
    use super::nearest_palindromic;
    #[test]
    fn test_nearest_palindromic() {
        assert_eq!(
            String::from("121"),
            nearest_palindromic(String::from("123"))
        );
    }
}
