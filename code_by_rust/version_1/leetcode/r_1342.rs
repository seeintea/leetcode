pub fn number_of_steps(num: i32) -> i32 {
    let mut num = num;
    let mut ret = 0;
    while 0 < num {
        if num % 2 == 0 {
            num = num / 2;
        } else {
            num -= 1;
        }
        ret += 1;
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::number_of_steps;
    #[test]
    fn test_number_of_steps() {
        assert_eq!(12, number_of_steps(123));
        assert_eq!(4, number_of_steps(8));
        assert_eq!(6, number_of_steps(14));
        assert_eq!(0, number_of_steps(0))
    }
}
