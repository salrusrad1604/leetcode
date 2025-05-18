/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const obj1 = getSortedItems(word1);
  const obj2 = getSortedItems(word2);

  for (let i = 0; i < obj1.keys.length; i++) {
    if (obj1.keys[i] !== obj2.keys[i] || obj1.counts[i] !== obj2.counts[i]) {
      return false;
    }
  }

  return true;
};

function getSortedItems(word) {
  const obj = {};

  for (let c of word) {
    obj[c] = (obj[c] || 0) + 1;
  }

  return {
    keys: Object.keys(obj).sort(),
    counts: Object.values(obj).sort((a, b) => a - b),
  };
}
// const data = ['abc', 'bca'];
// const data = ['a', 'aa'];
// const data = ["cabbba", "abbccc"]
// const data = ['abbbzcf', 'babzzcz'];
const data = ['abbzzca', 'babzzcz'];

console.log(closeStrings(...data));
