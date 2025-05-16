/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const res = [];
    let init = 0;
    let max = intervals[init][1];

    for (let i = init; i < intervals.length - 1; i++) {
        if (max < intervals[i + 1][0]) {
            res.push([intervals[init][0], max]);
            init = i + 1;
            max = intervals[init][1];
        } else {
            max = Math.max(max, intervals[i + 1][1]);
        }
    }

    if (init === intervals.length - 1) {
        res.push(intervals[init]);
    } else {
        res.push([intervals[init][0], max]);
    }

    return res;
};


// function merge(intervals) {
//     const sortInterval = intervals.sort((a, b) => a[0] - b[0]);
//     const result = [sortInterval[0]];

//     for (let i = 1; i < sortInterval.length; i++) {
//         if (sortInterval[i][0] > result[result.length - 1][1]) {
//             result.push(sortInterval[i]);
//         } else {
//             result[result.length - 1][1] = Math.max(
//                 sortInterval[i][1],
//                 result[result.length - 1][1],
//             );
//         }
//     }
//     return result;
// }

// const data = [
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
// ];
// const data = [
//     [1, 4],
//     [4, 5],
// ];

const data = [
    [1, 4],
    [0, 4],
];

console.log(JSON.stringify(merge(data)));
