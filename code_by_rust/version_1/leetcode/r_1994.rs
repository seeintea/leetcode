/**
 * https://leetcode-cn.com/problems/the-number-of-good-subsets/
 * 给你一个整数数组 nums 。如果 nums 的一个子集中，所有元素的乘积可以表示为一个或多个 互不相同的质数 的乘积，那么我们称它为 好子集 。
 * 比方说，如果 nums = [1, 2, 3, 4] ：
 * [2, 3] ，[1, 2, 3] 和 [1, 3] 是 好 子集，乘积分别为 6 = 2*3 ，6 = 2*3 和 3 = 3 。
 * [1, 4] 和 [4] 不是 好 子集，因为乘积分别为 4 = 2*2 和 4 = 2*2 。
 * 请你返回 nums 中不同的 好 子集的数目对 109 + 7 取余 的结果。
 * nums 中的 子集 是通过删除 nums 中一些（可能一个都不删除，也可能全部都删除）元素后剩余元素组成的数组。如果两个子集删除的下标不同，那么它们被视为不同的子集。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/the-number-of-good-subsets
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
pub fn number_of_good_subsets(nums: Vec<i32>) -> i32 {
    const PRIMES: [usize; 10] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    const NUM_MAX: usize = 30;
    const MOD: i64 = 1000000007;

    let freq: Vec<i64> = nums
        .iter()
        .map(|&x| x)
        .fold(vec![0; NUM_MAX + 1], |mut acc, x| {
            acc[x as usize] += 1;
            acc
        });

    let mut f: Vec<i64> = vec![0; 1 << PRIMES.len()];
    f[0] = 1;
    (0..freq[1]).for_each(|_| f[0] = f[0] * 2 % MOD);
    for i in 2..=NUM_MAX {
        if freq[i] == 0 {
            continue;
        }
        let (mut subset, x, mut check) = (0, i, true);
        for j in 0..PRIMES.len() {
            let prime = PRIMES[j];
            if x % (prime * prime) == 0 {
                check = false;
                break;
            }
            if x % prime == 0 {
                subset |= 1 << j;
            }
        }
        if !check {
            continue;
        }
        for mask in (1..=(1 << PRIMES.len())).rev() {
            if mask & subset == subset {
                f[mask] = f[mask] + f[mask ^ subset] * freq[x] % MOD;
            }
        }
    }
    let mask_max = 1 << PRIMES.len();
    (1..mask_max).fold(0, |mut ret, mask| {
        ret = (ret + f[mask]) % MOD;
        ret
    }) as i32
}

#[cfg(test)]
mod test {
    use super::number_of_good_subsets;
    #[test]
    fn test_number_of_good_subsets() {
        assert_eq!(6, number_of_good_subsets(vec![1, 2, 3, 4]));
    }
}
