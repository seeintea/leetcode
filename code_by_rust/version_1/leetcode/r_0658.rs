/**
 * https://leetcode-cn.com/problems/find-k-closest-elements/
 * 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
 * 整数 a 比整数 b 更接近 x 需要满足：
 * |a - x| < |b - x| 或者
 * |a - x| == |b - x| 且 a < b
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-k-closest-elements
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn find_closest_elements(arr: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
    let len = arr.len();
    if x < arr[0] {
        return arr[0..k as usize].to_vec();
    } else if arr[len - 1] < x {
        return arr[(len - k as usize)..len].to_vec();
    } else {
        let mut left = 0;
        let mut right = len as i32 - k;
        while left < right {
            let mid = (left + right) / 2;
            if arr[mid as usize + k as usize] - x < x - arr[mid as usize] {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return arr[left as usize..k as usize + right as usize].to_vec();
    }
}

#[cfg(test)]
mod tests {
    use crate::leetcode::r_0658::find_closest_elements;

    #[test]
    fn test_find_closest_elements() {
        assert_eq!(
            vec![1, 2, 3, 4],
            find_closest_elements(vec![1, 2, 3, 4, 5], 4, 3)
        )
    }
}
