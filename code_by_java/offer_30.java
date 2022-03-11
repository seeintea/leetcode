import java.util.Stack;

public class offer_30 {
}

/**
 * 包含min函数的栈
 * 链接：https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
 */
class MinStack {

    Stack<Integer> stack;
    Stack<Integer> assist;

    /** initialize your data structure here. */
    public MinStack() {
        stack = new Stack<>();
        assist = new Stack<>();
    }

    public void push(int x) {
        stack.add(x);
        if(assist.isEmpty() || x < assist.peek()) {
            assist.add(x);
        }
    }

    public void pop() {
        int x = stack.pop();
        if(x == assist.peek()) {
            assist.pop();
        }
    }

    public int top() {
        return stack.peek();
    }

    public int min() {
        return assist.peek();
    }
}
