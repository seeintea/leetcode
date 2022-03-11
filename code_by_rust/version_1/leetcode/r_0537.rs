/**
 * https://leetcode-cn.com/problems/complex-number-multiplication/
 * 复数 可以用字符串表示，遵循 "实部+虚部i" 的形式，并满足下述条件：
 * 实部 是一个整数，取值范围是 [-100, 100
 * 虚部 也是一个整数，取值范围是 [-100, 100]
 * i2 == -1
 * 给你两个字符串表示的复数 num1 和 num2 ，请你遵循复数表示形式，返回表示它们乘积的字符串。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/complex-number-multiplication
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn complex_number_multiply(num1: String, num2: String) -> String {
    let n1: Vec<&str> = num1.split("+").collect();
    let n2: Vec<&str> = num2.split("+").collect();
    let (a, c) = (n1[0].parse::<i32>().unwrap(), n2[0].parse::<i32>().unwrap());
    let (b, d) = (
        n1[1][..n1[1].len() - 1].parse::<i32>().unwrap(),
        n2[1][..n2[1].len() - 1].parse::<i32>().unwrap(),
    );
    format!("{}+{}i", a * c - b * d, a * d + b * c)
}

#[cfg(test)]
mod test {
    use super::complex_number_multiply;
    #[test]
    fn test_complex_number_multiply() {
        assert_eq!(
            String::from("0+2i"),
            complex_number_multiply(String::from("1+1i"), String::from("1+1i"))
        );
    }
}
