#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  int maxProfit(vector<int>& prices) {
    int size = prices.size();
    int profit = 0;
    for (int i = 1; i < size; i += 1) {
      profit += max(0, prices[i] - prices[i - 1]);
    }
    return profit;
  }
};

int main() {
  vector<int> prices;
  prices.push_back(1);
  prices.push_back(2);
  prices.push_back(3);
  prices.push_back(4);
  prices.push_back(5);
  // prices.push_back(6);
  Solution solution = Solution();
  int profit = solution.maxProfit(prices);
  cout << profit << endl;
}