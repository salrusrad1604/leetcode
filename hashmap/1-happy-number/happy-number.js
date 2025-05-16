/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const obj = new Map();

    obj.set(1, null);

    while (true) {
        if (obj.has(n)) {
            break;
        }

        obj.set(n, null);

        n = n
            .toString()
            .split('')
            .reduce((acc, curr) => acc + curr * curr, 0);
    }

    return n === 1 ? true : false;
};

const data = 19;
// const data = 2;

console.log(isHappy(data));
