#include <vector>
using namespace std;
class Solution {
 public:
  int findMin(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] < nums[right]) {
        right = mid;
      } else if (nums[right] < nums[mid]) {
        left = mid + 1;
      } else {
        right -= 1;
      }
    }
    return nums[left];
  }
};