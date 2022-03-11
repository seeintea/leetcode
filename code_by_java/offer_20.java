public class offer_20 {

    /**
     * 表示数值的字符串
     * 链接：https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
     * @param s 输入字符
     * @return 判断是否为数值
     */
    public static boolean isNumber(String s) {
        if(s == null || s.length() == 0){
            return false;
        }
        //标记是否遇到相应情况
        boolean digit = false;
        boolean dot = false;
        boolean e = false;
        char[] chars = s.trim().toCharArray();

        for(int i = 0; i < chars.length; i++){
            if(chars[i] >= '0' && chars[i] <= '9'){
                digit = true;
            }else if(chars[i] == '.'){
                // 出现 '.'
                if(dot || e){
                    return false;
                }
                dot = true;
            }else if(chars[i] == 'e' || chars[i] == 'E'){
                // e 之前必须有数字
                if(e || !digit){
                    return false;
                }
                e = true;
                // 重置 保证 e 之后数字
                digit = false;
            }else if(chars[i] == '-' || chars[i] == '+'){
                //+-出现在0位置或者e/E的后面第一个位置才是合法的
                if(i != 0 && chars[i-1] != 'e' && chars[i-1] != 'E'){
                    return false;
                }
            }else{
                return false;
            }
        }
        return digit;
    }


    // 考虑过于复杂繁琐 失败
    public static boolean _isNumber(String s) {
        if(s == null) {
            return false;
        }
        // 去除首尾空格
        s = s.trim();
        if(s.length() == 0 || (s.length() == 1 && (s.charAt(0) < '0' || s.charAt(0) > '9'))){
            return false;
        }
        char[] chars = s.toCharArray();
        int point = 0, border = chars.length;
        // 判断正负符号
        if(point < border && (chars[point] == '-' || chars[point]== '+')) {
            point++;
            // 排除 +-5 此类情况
            if(point < border && (chars[point] == '-' || chars[point]== '+')) {
                return false;
            }
        }
        // 仅有正负号
        if(point == border) {
            return false;
        }
        // 设置标志位
        int digit = 0, dot = 0, e = 0;
        while (point != border) {
            if(chars[point] >= '0' && chars[point] <= '9') {
                digit++;
                point++;
            } else if(chars[point] == '.') {
                // 判断 . 情况
                // 需要注意 1.2.3 和 e1.2 都不合法
                // 或者 digit == 0 即 .12 的形式
                // 保证小数点之前一定是数组
                if(dot > 0 || e > 0 || (point > 0 && ((chars[point-1] <= '0' && '9' <= chars[point-1])))) {
                    return false;
                }
                dot++;
                point++;
            } else if(chars[point] == 'e' || chars[point] == 'E') {
                // 判断 e 的情况
                if(e > 0 || digit == 0) {
                    return false;
                }
                point++;
                // 判断 e 之后的符号问题
                if(point < border && (chars[point] == '-' || chars[point]== '+')) {
                    point++;
                    // 判断 e 后双符号
                    if(point < border && (chars[point+1] == '-' || chars[point+1]== '+')) {
                        return false;
                    }
                }
                // 边界了 1e
                if(point == border) {
                    return false;
                }
                e++;
            } else {
                return false;
            }
        }
        return true;
    }

}
