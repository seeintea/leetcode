public class offer_29 {

    /**
     * 顺时针打印矩阵
     * 链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
     * @param matrix 多维数组
     * @return 扁平数组
     */
    public int[] spiralOrder(int[][] matrix) {
        int columns = matrix.length;
        int rows = columns > 0 ? matrix[0].length : 0;
        int size = columns * rows;
        if(size == 0) {
            return new int[0];
        }
        int[] res = new int[size];
        int l = 0, r = rows - 1, t = 0, b = columns - 1, idx = 0;

        // 循环四个方向添加数据
        while (true) {
            // l -> r 遍历完缩减 t
            for(int i=l; i<=r; i++) {
                res[idx++] = matrix[t][i];
            }
            if(++t > b) {
                break;
            }

            // t -> b 遍历完缩减 r
            for(int i=t; i<=b; i++) {
                res[idx++] = matrix[i][r];
            }
            if(l > --r) {
                break;
            }

            // r -> l 遍历完缩减 b
            for(int i=r; i>=l; i--) {
                res[idx++] = matrix[b][i];
            }
            if(t > --b) {
                break;
            }

            // b -> t 遍历完后缩减 l
            for(int i=b; i>=t; i--) {
                res[idx++] = matrix[l][i];
            }
            if(++l > r) {
                break;
            }
        }
        return res;
    }

}
