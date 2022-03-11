public class offer_17 {

    /**
     * 打印从1到最大的n位数
     * 链接：https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
     * @param n 位数
     * @return 返回 1到最大的n位数
     */
    public int[] printNumbers(int n) {
        int max = (int) Math.pow(10, n);
        int[] result = new int[max-1];
        for(int i=1; i<max; i++) {
            result[i-1] = i;
        }
        return result;
    }

}
