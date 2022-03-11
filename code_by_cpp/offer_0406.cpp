#include <vector>
using namespace std;

class Solution {
 public:
  vector<vector<int> > reconstructQueue(vector<vector<int> >& people) {
    // 根据身高排序
    sort(people.begin(), people.end(),
         [](const vector<int>& prev, const vector<int>& next) {
           return next[0] < prev[0] ||
                  (prev[0] == next[0] && prev[1] < next[1]);
         });
    vector<vector<int> > result;
    for (const vector<int>& person : people) {
      result.insert(result.begin() + person[1], person);
    }
    return result;
  }
};