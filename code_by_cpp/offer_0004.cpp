#include <vector>
using namespace std;
class Solution {
 public:
  double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    int leftSize = nums1.size(), rightSize = nums2.size();
    int mid = (leftSize + rightSize) / 2;
    int leftIndex = 0, rightIndex = 0;
    int leftVal = 0, rightVal = 0;
    for (int i = 0; i <= mid; i++) {
      leftVal = rightVal;
      if (leftIndex < leftSize &&
          (rightIndex >= rightSize || nums1[leftIndex] <= nums2[rightIndex])) {
        rightVal = nums1[leftIndex++];
      } else {
        rightVal = nums2[rightIndex++];
      }
    }
    if ((leftSize + rightSize) % 2 == 0) {
      return (leftVal + rightVal) / 2.0;
    }
    return rightVal;
  }
};