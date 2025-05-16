/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // use binary search technique
    let left = 0;
    let right = x;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            answer = mid;
            left = mid + 1; // search in the right half
        } else if (square > x) {
            right = mid - 1;
        }
    }
    return answer;
};

const data = [0, 4, 8, 10];

data.forEach((v) => console.log(mySqrt(v)));
