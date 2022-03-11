public class offer_19 {

    /**
     * 正则表达式匹配
     * 链接：https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/
     * @param s 匹配字符串 可能为空
     * @param p 匹配公式 可能唯恐
     * @return 是否匹配
     */
    public static boolean isMatch(String s, String p) {

        /**
         * 来自题解 QAQ
         */
        int m = s.length(), n = p.length();

        boolean [][] match = new boolean[m+1][n+1];

        for(int i=0; i<=m; i++) {
            for(int j=0; j<=n; j++) {
                if(j == 0) {    // 空正则
                    match[i][j] = i == 0;
                } else {    // 非空正则
                    // 分为两种情况非 * 和 *
                    if(p.charAt(j-1) != '*') {
                        if(i > 0 && (s.charAt(i-1) == p.charAt(j-1) || p.charAt(j-1) == '.')) {
                            match[i][j] = match[i-1][j-1];
                        }
                    } else {
                        // 不看 *
                        if(j >= 2) {
                            match[i][j] |= match[i][j-2];
                        }
                        // 看 *
                        if(i >= 1 && j >= 2 && (s.charAt(i - 1) == p.charAt(j - 2) || p.charAt(j - 2) == '.')){
                            match[i][j] |= match[i-1][j];
                        }
                    }
                }
            }
        }
        return match[m][n];
    }
}
