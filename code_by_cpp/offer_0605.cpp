#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  bool canPlaceFlowers(vector<int> &flowerbed, int n) {
    int size = flowerbed.size();
    int count = 0, prev = -1;
    for (int i = 0; i < size; i++) {
      if (flowerbed[i] == 1) {
        if (prev < 0) {
          count += i / 2;
        } else {
          count += (i - prev - 2) / 2;
        }
        prev = i;
      }
    }
    if (prev < 0) {
      count = (size + 1) / 2;
    } else {
      count += (size - prev - 1) / 2;
    }
    return count >= n;
  }
};

int main() {
  vector<int> flowerbed;
  flowerbed.push_back(1);
  flowerbed.push_back(0);
  flowerbed.push_back(0);
  flowerbed.push_back(0);
  flowerbed.push_back(0);
  flowerbed.push_back(1);
  Solution solution = Solution();
  solution.canPlaceFlowers(flowerbed, 1);
}