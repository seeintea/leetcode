/**
 * https://leetcode-cn.com/problems/pancake-sorting/
 * 给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。
 * 一次煎饼翻转的执行过程如下：
 * 选择一个整数 k ，1 <= k <= arr.length
 * 反转子数组 arr[0...k-1]（下标从 0 开始）
 * 例如，arr = [3,2,1,4] ，选择 k = 3 进行一次煎饼翻转，反转子数组 [3,2,1] ，得到 arr = [1,2,3,4] 。
 * 以数组形式返回能使 arr 有序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * arr.length 范围内的有效答案都将被判断为正确。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/pancake-sorting
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn pancake_sort(arr: Vec<i32>) -> Vec<i32> {
    let mut arr = arr;
    let mut ret = vec![];
    for i in (2..=arr.len() as i32).rev() {
        let idx = arr.iter().position(|&x| x == i).unwrap() + 1;
        if i == idx as i32 {
            continue;
        }
        if idx > 1 {
            ret.push(idx as i32);
            arr[0..idx].reverse();
        }
        arr[0..i as usize].reverse();
        ret.push(i);
    }
    ret
}

#[cfg(test)]
mod tests {
    use super::pancake_sort;
    #[test]
    fn test_pancake_sort() {
        assert_eq!(vec![3, 4, 2, 3, 2], pancake_sort(vec![3, 2, 4, 1]));
    }
}
