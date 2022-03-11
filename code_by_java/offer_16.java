public class offer_16 {

    /**
     * 数值的整数次方
     * 链接：https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
     * @param x 数值
     * @param n 被平方次数
     * @return 整数次方
     */
    public double myPow(double x, int n) {
        if(x == 0) return 0;
        // long 的原因 => -（最大值） 转换为溢出
        long index = n;
        double result = 1.0;
        if(index < 0) {
            x = 1 / x;
            index = -index;
        }
        while(index > 0) {
            if((index & 1) == 1) {
                result *= x;
            }
            x *= x;
            index >>= 1;
        }
        return result;
    }

}
