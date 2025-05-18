/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let res = '';
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '*') {
      count++;
    } else if (count) {
      count--;
      continue;
    } else {
      res = s[i] + res;
    }
  }
  return res;
};

// var removeStars = function (s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '*') {
//       stack.push(s[i]);
//     } else {
//       stack.pop();
//     }
//   }

//   return stack.join('');
// };

// const data = 'leet**cod*e';
const data = 'erase*****';

console.log(removeStars(data));
