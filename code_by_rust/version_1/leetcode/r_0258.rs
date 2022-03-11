/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果
 * https://leetcode-cn.com/problems/add-digits/
 *
*/
pub fn add_digits(num: i32) -> i32 {
    let mut ret = num;
    while 9 < ret {
        let mut tmp = ret;
        ret = 0;
        while 9 < tmp {
            ret += tmp % 10;
            tmp /= 10;
        }
        ret += tmp
    }
    ret
}

#[cfg(test)]
mod test {
    use super::add_digits;
    #[test]
    fn test_add_digits() {
        assert_eq!(2, add_digits(38));
        assert_eq!(1, add_digits(28));
        assert_eq!(0, add_digits(0));
        assert_eq!(9, add_digits(9));
        assert_eq!(1, add_digits(10));
    }
}
