/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */
pub fn move_zeroes(nums: &mut Vec<i32>) {
    let len = nums.len();
    let mut prev = len;
    for i in 0..len {
        if nums[i] == 0 {
            prev = i;
            break;
        }
    }
    while prev < len {
        let mut next = prev + 1;
        while next < len {
            if nums[next] != 0 {
                nums[prev] = nums[next];
                nums[next] = 0;
                break;
            }
            next += 1;
        }
        prev += 1;
    }
}

#[cfg(test)]
mod test {
    use super::move_zeroes;
    #[test]
    fn test_move_zeroes() {
        let mut nums = vec![0, 1, 0, 3, 12];
        move_zeroes(&mut nums);
        assert_eq!(vec![1, 3, 12, 0, 0], nums);
    }
}
