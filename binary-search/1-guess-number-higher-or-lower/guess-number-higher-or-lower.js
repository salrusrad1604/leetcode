/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return -1 if num is higher than the picked number
 *			   1 if num is lower than the picked number
 *         otherwise return 0
 *
 */
function guess(num) {
  if (num < data[1]) {
    return 1;
  } else if (num > data[1]) {
    return -1;
  } else {
    return 0;
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (r, l = 1) {
  const mid = Math.floor((r + l) / 2);

  const isGuess = guess(mid);

  if (isGuess < 0) {
    return guessNumber(mid - 1, l);
  } else if (isGuess > 0) {
    return guessNumber(r, mid + 1);
  } else {
    return mid;
  }
};

// var guessNumber = function (n) {
//   let start = 1;
//   let end = n;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (guess(mid) == 0) {
//       return mid;
//     } else if (guess(mid) === 1) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
// };

// const data = [10, 6];
// const data = [1, 1];
// const data = [2, 1];
// const data = [2, 2];
const data = [3, 3];

console.log(guessNumber(data[0]));
