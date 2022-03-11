pub fn valid_utf8(data: Vec<i32>) -> bool {
    let data: Vec<u8> = data.iter().map(|v| *v as u8).collect();
    let mut ret = 0;
    for v in data.iter() {
        if ret == 0 {
            if v >> 5 == 0b110 {
                ret = 1;
            } else if v >> 4 == 0b1110 {
                ret = 2;
            } else if v >> 3 == 0b11110 {
                ret = 3;
            } else if v >> 7 > 0 {
                return false;
            }
        } else {
            if v >> 6 != 0b10 {
                return false;
            }
            ret -= 1;
        }
    }
    ret == 0
}

#[cfg(test)]
mod tests {
    use super::valid_utf8;
    #[test]
    fn test_valid_utf8() {
        assert_eq!(true, valid_utf8(vec![197, 130, 1]));
    }
}
