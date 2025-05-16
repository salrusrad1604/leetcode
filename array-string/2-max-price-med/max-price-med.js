function maxProfit (prices) {
    let result = 0;
    let left = 0;
    let right = 1;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            result = result + (prices[right] - prices[left]);
        }
        left = right;
        right++;
    }

    return result;
};

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [1,2,3,4,5];
const prices = [7,6,4,3,1];
console.log(maxProfit(prices));
