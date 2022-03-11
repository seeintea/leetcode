#include <string>
#include <unordered_map>
#include <vector>
using namespace std;
class Solution {
 public:
  string frequencySort(string s) {
    unordered_map<char, int> store;
    int size = s.size();
    for (auto &letter : s) {
      store[letter] += 1;
    }
    vector<pair<char, int> > vector;
    for (auto &it : store) {
      vector.emplace_back(it);
    }
    sort(vector.begin(), vector.end(),
         [](const pair<char, int> &a, const pair<char, int> &b) {
           return a.second > b.second;
         });
    string ret;
    for (auto &[ch, num] : vector) {
      for (int i = 0; i < num; i++) {
        ret.push_back(ch);
      }
    }
    return ret;
  }
};