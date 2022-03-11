public class offer_14_I {

    /**
     * 剪绳子
     * 链接：https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
     * @param n 绳子长度
     * @return 剪断绳子最大乘积
     */
    public int cuttingRope(int n) {
        int[] dp = new int[n+1];
        dp[2] = 1;
        for(int i=3; i<n+1; i++) {
            for(int j=2; j<i; j++) {
                dp[i] = Math.max(dp[i], Math.max(j*dp[i-j], j*(i-j)));
            }
        }
        return dp[n];
    }

    // 递归
    public int _cuttingRope(int n) {
        if(n == 2) {
            return 1;
        }
        int max = 0;
        for(int i=2; i<n; i++) {
            max = Math.max(max, Math.max(i*_cuttingRope(n-i), i*(n-i)));
        }
        return max;
    }

    // memo
    public int __cuttingRope(int n) {
        int[] memo = new int[n+1];
        memo[2] = 1;
        return rope(memo, n);
    }

    public int rope(int[] memo, int n) {
        if(memo[n] != 0) {
            return memo[n];
        }
        int value = 0;
        for(int i=2; i<n; i++) {
            value = Math.max(value, Math.max(i*rope(memo,n-i), i*(n-i)));
        }
        memo[n] = value;
        return memo[n];
    }

}
