/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const [target, next] = str1.length < str2.length ? [str1, str2] : [str2, str1];
  const n = target.length;
  const m = next.length;
  let res = '';

  for (let i = n - 1; i >= 0; i--) {
    if (n % (i + 1) || m % (i + 1)) {
      continue;
    }
    const str = target.slice(0, i + 1);
    if (next === str.repeat(m / (i + 1)) && target === str.repeat(n / (i + 1))) {
      res = str;
      break;
    }
  }

  return res;
};

// const data = ['ABCABC', 'ABC'];
// const data = ['ABABAB', 'ABAB'];
const data = ['LEET', 'CODE'];

console.log(gcdOfStrings(...data));
