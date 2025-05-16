/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) {
            return i;
        }
    }

    return citations.length;
};

// const data = [3,0,6,1,5];
// const data = [1, 3, 1];
const data = [100];

console.log(hIndex(data));
