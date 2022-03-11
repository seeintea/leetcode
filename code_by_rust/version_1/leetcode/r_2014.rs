/**
 * 给你一个整数数组 nums 。nums 中，子数组的 范围 是子数组中最大元素和最小元素的差值。
 * 返回 nums 中 所有 子数组范围的 和 。
 * 子数组是数组中一个连续 非空 的元素序列。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sum-of-subarray-ranges
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn sub_array_ranges(nums: Vec<i32>) -> i64 {
    let len = nums.len();
    let cal = |cmp: fn(last: i32, ai: i32) -> bool| {
        let mut stk: Vec<(i32, usize, usize)> = vec![];
        let mut sum: i64 = 0;
        for (i, &ai) in nums.iter().enumerate() {
            let mut b = i;
            while !stk.is_empty() && cmp(stk[stk.len() - 1].0, ai) {
                if let Some((last, bound, j)) = stk.pop() {
                    b = bound;
                    sum += last as i64 * (j - bound + 1) as i64 * (i - j) as i64;
                }
            }
            stk.push((ai, b, i));
        }
        while let Some((last, bound, j)) = stk.pop() {
            sum += last as i64 * (j - bound + 1) as i64 * (len - j) as i64;
        }
        sum
    };
    cal(|last, ai| last <= ai) - cal(|last, ai| last >= ai)
}
