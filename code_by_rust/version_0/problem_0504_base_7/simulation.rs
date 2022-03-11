pub struct Solution;

impl Solution {
    pub fn convert_to_base7(num: i32) -> String {
        if num == 0 {
            return '0'.to_string();
        }
        let negative = num < 0;
        let mut num = num.abs();
        let mut ret = String::new();
        while num > 0 {
            ret.push(((num % 7) as u8 + b'0') as char);
            num /= 7;
        }
        if negative {
            ret.push('-');
        }
        ret.chars().rev().collect::<String>()
    }
}

impl super::Solution for Solution {
    fn convert_to_base7(nums: i32) -> String {
        Self::convert_to_base7(nums)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_solution() {
        super::super::tests::run::<super::Solution>();
    }
}
