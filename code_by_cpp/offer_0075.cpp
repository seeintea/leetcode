#include <vector>
using namespace std;
class Solution {
 public:
  void sortColors(vector<int>& nums) {
    int size = nums.size();
    int forZero = 0, forOne = 0;
    for (int i = 0; i < size; i++) {
      if (nums[i] == 1) {
        swap(nums[i], nums[forOne]);
        forOne += 1;
      } else if (nums[i] == 0) {
        swap(nums[i], nums[forZero]);
        if (forZero < forOne) {
          swap(nums[i], nums[forOne]);
        }
        forZero += 1;
        forOne += 1;
      }
    }
  }
};