var maxProfit = function (prices) {
    let maxPrice = 0;
    let left = 0;
    let right = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxPrice = Math.max(maxPrice, prices[right] - prices[left]);
        } else {
            left = right;
        }
        right++;
    }
    return maxPrice;
};

// const prices = [7, 6, 4, 3, 1];
const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));



