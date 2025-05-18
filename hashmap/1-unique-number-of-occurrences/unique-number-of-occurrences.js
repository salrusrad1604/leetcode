/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1 + (obj[arr[i]] || 0);
  }

  const set = new Set();

  for (let key in obj) {
    if (set.has(obj[key])) {
      return false;
    }
    set.add(obj[key]);
  }

  return true;
};

// const data = [1, 2, 2, 1, 1, 3];
const data = [1, 2];
// const data = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

console.log(uniqueOccurrences(data));
