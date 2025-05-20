/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const allChars = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const arr = s.split('');

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (!allChars.has(arr[i]) && i < j) {
      i++;
    }
    while (!allChars.has(arr[j]) && i < j) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];

    i++;
    j--;
  }

  return arr.join('');
};

// const data = 'IceCreAm';
const data = 'leetcode';
// const data = ' ';

console.log(reverseVowels(data));
