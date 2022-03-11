#include <string>
#include <vector>
using namespace std;
class Solution {
 public:
  vector<int> partitionLabels(string s) {
    int size = s.length();
    int last[26];
    for (int i = 0; i < size; i++) {  // 记录字母最后出现的位置
      last[s[i] - 'a'] = i;
    }
    vector<int> vector;
    int start = 0, end = 0;
    for (int i = 0; i < size; i++) {
      end = max(end, last[s[i] - 'a']);
      if (i == end) {
        vector.push_back(end - start + 1);
        start = end + 1;
      }
    }
    return vector;
  }
};