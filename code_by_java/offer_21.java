public class offer_21 {

    /**
     * 调整数组顺序使奇数位于偶数前面
     * 链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
     * @param nums 未排序数组
     * @return 排序数组
     */
    public int[] exchange(int[] nums) {
        int i = 0, j = nums.length-1,temp;
        while (i < j) {
            while (i < j &&  nums[i] % 2 != 0) {
                i++;
            }
            while (i < j && nums[j] % 2 == 0) {
                j--;
            }
            if(i < j) {
                temp = nums[i];
                nums[i++] = nums[j];
                nums[j--] = temp;
            }
        }
        return nums;
    }


    public int[] _exchange(int[] nums) {
        int[] result = new int[nums.length];
        int i = 0, j = nums.length-1;

        for(int val: nums) {
            if( val % 2 == 0) {
                result[j--] = val;
            } else {
                result[i++] = val;
            }
        }

        return result;
    }
}
