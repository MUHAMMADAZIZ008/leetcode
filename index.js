/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const maxPro = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxPro) {
        maxPro = profit;
      }
    }
  }
  return maxPro;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
