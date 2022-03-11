public class offer_14_II {

    /**
     * 剪绳子
     * 链接：https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
     * @param n 绳子长度
     * @return 剪断绳子最大乘积
     */


    public int _cuttingRope(int n) {
        if(n <= 4) {
            return n == 4 ? n : n-1;
        }
        long result = 1;
        while (n > 4) {
            result *= 3;
            result %= 1000000007;
            n -= 3;
        }
        return (int) (result * n % 1000000007);
    }

}
