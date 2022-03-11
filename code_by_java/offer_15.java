public class offer_15 {

    /**
     * 二进制中1的个数
     * 链接：https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
     * @param n 二进制
     * @return 1 的个数
     */
    public int hammingWeight(int n) {
        int result = 0;
        while (n != 0) {
            result += n & 1;
            n >>>= 1;
        }
        return result;
    }

}
