#include <algorithm>
#include <iostream>
#include <map>
#include <vector>
using namespace std;

bool customSort(const vector<int>& prev, const vector<int>& next) {
  return prev[1] < next[1];
}

class Solution {
 public:
  int findMinArrowShots(vector<vector<int> >& points) {
    sort(points.begin(), points.end(), customSort);
    int count = 1, size = points.size(), prev = points[0][1];
    for (int i = 1; i < size; i++) {
      if (prev < points[i][0]) {
        count++;
        prev = points[i][1];
      }
    }
    return count;
  }
};

int main() {
  vector<int> v1, v2, v3, v4, v5, v6, v7, v8, v9, v10;
  v1.push_back(3);
  v1.push_back(9);
  v2.push_back(7);
  v2.push_back(12);
  v3.push_back(3);
  v3.push_back(8);
  v4.push_back(6);
  v4.push_back(8);
  v5.push_back(9);
  v5.push_back(10);
  v6.push_back(2);
  v6.push_back(9);
  v7.push_back(0);
  v7.push_back(9);
  v8.push_back(3);
  v8.push_back(9);
  v9.push_back(0);
  v9.push_back(6);
  v10.push_back(2);
  v10.push_back(8);
  vector<vector<int> >* points;
  points->push_back(v1);
  points->push_back(v2);
  points->push_back(v3);
  points->push_back(v4);
  points->push_back(v5);
  points->push_back(v6);
  points->push_back(v7);
  points->push_back(v8);
  points->push_back(v9);
  points->push_back(v10);
  Solution solution = Solution();
  solution.findMinArrowShots(*points);
}