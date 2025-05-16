/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    if (n % 2 === 0) {
        const halfPower = myPow(x, n / 2);
        return halfPower * halfPower;
    } else {
        return x * myPow(x, n - 1);
    }
};


// const data = [2.00000, 10];
// const data = [2.1, 3];
const data = [2.00000, -2];

console.log(myPow(...data))