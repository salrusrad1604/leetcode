/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const letter = new Set(['a', 'e', 'i', 'o', 'u']);

var maxVowels = function (s, k) {
  let res = 0;

  for (let i = 0; i < k; i++) {
    if (letter.has(s[i])) {
      res++;
    }
  }

  let l = 1;
  let r = k;

  let curr = res;

  while (r < s.length) {
    if (res === k) {
      break;
    }
    if (letter.has(s[r])) {
      curr++;
    }
    if (letter.has(s[l - 1])) {
      curr--;
    }
    if (curr > res) {
      res = curr;
    }

    l++;
    r++;
  }
  return res;
};

// const data = ['abciiidef', 3];
// const data = ['aeiou', 2];
// const data = ['leetcode', 3];
// const data = ['tryhard', 4];
// const data = ['novowels', 1];
const data = ['tnfazcwrryitgacaabwm', 4];

console.log(maxVowels(...data));
