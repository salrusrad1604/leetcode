/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);

  return spells.reduce((acc, curr) => {
    const potionsLength = potions.length;
    let l = 0;
    let r = potionsLength - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (potions[mid] * curr >= success) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    acc.push(potionsLength - r - 1);

    return acc;
  }, []);
};

const data = [[5, 1, 3], [1, 2, 3, 4, 5], 7];
// const data = [[3, 1, 2], [8, 5, 8], 16];

console.log(successfulPairs(...data));
