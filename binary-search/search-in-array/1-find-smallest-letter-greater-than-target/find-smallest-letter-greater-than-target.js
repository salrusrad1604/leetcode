/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let l = 0;
  let r = letters.length - 1;

  while (l <= r) {
    const mid = Math.floor(0.5 * (l + r));

    if (letters[mid] <= target) {
      l = mid + 1;
    } else if (mid > 0 && letters[mid - 1] > target) {
      r = mid - 1;
    } else {
      return letters[mid];
    }
  }

  return letters[0];
};

const data = [['c', 'f', 'j'], 'a'];
// const data = [['c', 'f', 'j'], 'c'];
// const data = [['x', 'x', 'y', 'y'], 'z'];
// const data = [['c', 'f', 'j'], 'g'];
// const data = [['c', 'f', 'j'], 'j'];

console.log(nextGreatestLetter(...data));
