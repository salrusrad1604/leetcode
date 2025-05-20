/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n <= 0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      if (!--n) return true;
    }
  }
  return false;
};

// const data = [[1, 0, 0, 0, 1], 1];
// const data = [[1, 0, 0, 0, 1], 2];
// const data = [[0, 0, 0, 0, 0, 1, 0, 0], 0];
const data = [[1, 0, 0, 0, 0, 0, 1], 2];

console.log(canPlaceFlowers(...data));
