import java.util.Stack;

public class offer_31 {

    /**
     * 栈的压入、弹出序列
     * 链接：https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
     * @param pushed 压入序列
     * @param popped 弹出序列
     * @return 是否匹配
     */
    // 最佳解法
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        int push = 0, pop = 0;
        for(int value: pushed) {
            // 模拟入栈
            pushed[push] = value;
            // 模拟出栈
            while (push >= 0 && pushed[push] == popped[pop]) {
                pop++;
                push--;
            }
            push++;
        }
        return push == 0;
    }


    public boolean _validateStackSequences(int[] pushed, int[] popped) {
        Stack<Integer> stack = new Stack<>();
        int i = 0;
        for(int value: pushed) {
            stack.push(value);
            while (!stack.isEmpty() && stack.peek() == popped[i]) {
                stack.pop();
                i++;
            }
        }
        return stack.isEmpty();
    }

}
