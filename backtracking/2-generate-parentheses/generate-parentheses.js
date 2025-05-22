/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const res = [];

  const gen = (curr, l, r) => {
    if (l === n && r === n) {
      res.push(curr);
      return;
    }

    if (l < n) gen(curr + '(', l + 1, r);

    if (r < l) gen(curr + ')', l, r + 1);
  };

  gen('', 0, 0);
  return res;
};

const data = 3;
// const data = 1;

console.log(generateParenthesis(data));
