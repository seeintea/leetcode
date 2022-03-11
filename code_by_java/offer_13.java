public class offer_13 {

    /**
     * 机器人的运动范围
     * 链接：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
     * @param m 横坐标
     * @param n 纵坐标
     * @param k 数位之和
     * @return 返回机器人的运动个字
     */
    public int movingCount(int m, int n, int k) {
        boolean[][] isVisited = new boolean[m][n];
        return count(m, n ,k , isVisited, 0, 0);
    }

    /**
     * 递归函数
     * @param m 横坐标
     * @param n 纵坐标
     * @param k 数位之和
     * @param isVisited 已访问数组
     * @param i 当前访问横坐标
     * @param j 当前访问纵坐标
     * @return 返回结果
     */
    public int count(int m, int n, int k, boolean [][] isVisited, int i, int j) {
        if(m<=i || n<=j || isVisited[i][j] == true || k < getIdx(i)+getIdx(j) ) {
            return 0;
        }
        isVisited[i][j] = true;
        return 1 + count(m, n, k, isVisited, i, j+1) + count(m, n, k, isVisited, i+1, j);
    }

    public int _count(int m, int n, int k, boolean [][] isVisited, int i, int j) {
        if(i<0 || j< 0 || m<=i || n<=j || isVisited[i][j] == true || k < getIdx(i)+getIdx(j) ) {
            return 0;
        }
        isVisited[i][j] = true;
        return 1 + count(m, n, k, isVisited, i, j+1) + count(m, n, k, isVisited, i, j-1) + count(m, n, k, isVisited, i-1, j) + count(m, n, k, isVisited, i+1, j);
    }


    /**
     * 位数之和
     * @param x 需要解析的值
     * @return 返回位数之和
     */
    public int getIdx(int x) {
        return x%10 + x/10;
    }
}
