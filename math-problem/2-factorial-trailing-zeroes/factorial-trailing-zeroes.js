/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    var count = 0,
        multiple = 5;
    while (multiple <= n) {
        count += Math.floor(n / multiple);
        multiple *= 5;
    }
    return count;
};

const data = [0, 1, 3, 4, 5, 6, 8, 9, 10, 30];
data.forEach((v) => console.log(trailingZeroes(v)));
