/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = '';
  const max = Math.max(word1.length, word2.length);
  for (let i = 0; i < max; i++) {
    if (word1[i]) {
      res += word1[i];
    }
    if (word2[i]) {
      res += word2[i];
    }
  }

  return res;
};

const data = ['abc', 'pqr'];
// const data = ['ab', 'pqrs'];
// const data = ['abcd', 'pq'];

console.log(mergeAlternately(...data));
