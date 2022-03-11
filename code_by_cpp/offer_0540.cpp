#include <vector>
using namespace std;
class Solution {
 public:
  int singleNonDuplicate(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
      int mid = left + (right - left) / 2;
      bool isEven = (right - mid) % 2 == 0;
      if (nums[mid + 1] == nums[mid]) {
        if (isEven) {
          left = mid + 2;
        } else {
          right = mid - 1;
        }
      } else if (nums[mid - 1] == nums[mid]) {
        if (isEven) {
          right = mid - 2;
        } else {
          left = mid + 1;
        }
      } else {
        return nums[mid];
      }
    }
    return nums[left];
  }
};