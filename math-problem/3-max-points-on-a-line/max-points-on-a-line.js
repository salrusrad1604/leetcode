/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points.length < 2) {
        return points.length;
    }

    let res = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const map = new Map();
        const [x1, y1] = points[i];
        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];

            const key = x2 === x1 ? Infinity : (y2 - y1) / (x2 - x1);
            map.set(key, map.has(key) ? map.get(key) + 1 : 2);
            res = Math.max(res, map.get(key));
        }
    }
    return res;
};
// const data = [
//     [1, 1],
//     [2, 2],
//     [3, 3],
// ];

// const data = [
//     [4, 5],
//     [4, -1],
//     [4, 0],
// ];

// const data = [
//     [1, 1],
//     [3, 2],
//     [5, 3],
//     [4, 1],
//     [2, 3],
//     [1, 4],
// ];

const data = [
    [54, 153],
    [1, 3],
    [0, -72],
    [-3, 3],
    [12, -22],
    [-60, -322],
    [0, -5],
    [-5, 1],
    [5, 5],
    [36, 78],
    [3, -4],
    [5, 0],
    [0, 4],
    [-30, -197],
    [-5, 0],
    [60, 178],
    [0, 0],
    [30, 53],
    [24, 28],
    [4, 5],
    [2, -2],
    [-18, -147],
    [-24, -172],
    [-36, -222],
    [-42, -247],
    [2, 3],
    [-12, -122],
    [-54, -297],
    [6, -47],
    [-5, 3],
    [-48, -272],
    [-4, -2],
    [3, -2],
    [0, 2],
    [48, 128],
    [4, 3],
    [2, 4],
];

console.log(maxPoints(data));
