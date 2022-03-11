#include <iostream>
#include <string>
#include <vector>
using namespace std;
class Solution {
 public:
  bool isSubsequence(string origin, string match) {
    int oSize = origin.size(), mSize = match.size();
    int i = 0, j = 0;
    for (; j < mSize, i < oSize; i += 1) {
      if (origin[i] == match[j]) {
        j += 1;
      }
    }
    return j == mSize;
  }

  string findLongestWord(string s, vector<string>& dictionary) {
    int size = dictionary.size();
    string result = "";
    for (int i = 0; i < size; i += 1) {
      string current = dictionary[i];
      if (isSubsequence(s, current)) {
        if (result.size() < current.size() ||
            result.size() == current.size() && current < result) {
          result = current;
        }
      }
    }
    return result;
  }
};

int main() {
  string s = "abpcplea";
  vector<string> dictionary;
  dictionary.push_back("ale");
  dictionary.push_back("apple");
  dictionary.push_back("monkey");
  dictionary.push_back("plea");
  Solution solution = Solution();
  string result = solution.findLongestWord(s, dictionary);
  cout << result << endl;
}