/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let merged = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
    i++;
  }
  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};

// const data = [
//   [
//     [1, 3],
//     [6, 9],
//   ],
//   [2, 5],
// ];
const data = [
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
    [20, 30],
    [60, 80],
    [90, 100],
  ],
  [88, 700],
];

console.log(JSON.stringify(insert(...data)));
