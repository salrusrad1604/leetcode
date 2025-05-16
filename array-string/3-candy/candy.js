/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const cand = new Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            cand[i] = cand[i - 1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            cand[i] = Math.max(cand[i], cand[i + 1] + 1);
        }
    }

    return cand.reduce((acc, curr) => acc + curr, 0);
};

const data = [1, 0, 2];
// const data = [1,2,2];

console.log(candy(data));
