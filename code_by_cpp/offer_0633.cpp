#include <cmath>
class Solution {
 public:
  bool judgeSquareSum(int c) {
    // 测试时使用 long
    int left = 0, right = (int)sqrt(c);
    while (left <= right) {
      int sum = left * left + right * right;
      if (sum == c) {
        return true;
      } else if (sum < c) {
        left += 1;
      } else {
        right -= 1;
      }
    }
    return false;
  }
};