#include <vector>
using namespace std;
class Solution {
 public:
  bool checkPossibility(vector<int>& nums) {
    int count = 0, size = nums.size();
    for (int i = 1; i < size; i++) {
      if (nums[i] < nums[i - 1]) {
        if (i == 1 || nums[i] >= nums[i - 2]) {
          nums[i - 1] = nums[i];
        } else {
          nums[i] = nums[i - 1];
        }
        count++;
      }
    }
    return count <= 1;
  }
};