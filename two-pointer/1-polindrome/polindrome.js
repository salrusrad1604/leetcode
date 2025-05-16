/**
 * @param {string}
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;
    var reg = /^\d$/;

    while (l < r) {
        const left = s[l];
        const right = s[r];

        if (
            left === ' ' ||
            (left.toUpperCase() === left.toLowerCase() && !reg.test(left))
        ) {
            l++;
            continue;
        }

        if (
            right === ' ' ||
            (right.toUpperCase() === right.toLowerCase() && !reg.test(right))
        ) {
            r--;
            continue;
        }

        if (left.toLowerCase() === right.toLowerCase()) {
            l++;
            r--;
            continue;
        }

        return false;
    }

    return true;
};

const test = 'A man, a plan, a canal: Panama';
// const test = 'race a car';
// const test = ' ';

console.log(isPalindrome(test));
