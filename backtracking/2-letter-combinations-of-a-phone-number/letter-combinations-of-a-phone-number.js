/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phone = {
    ['2']: ['a', 'b', 'c'],
    ['3']: ['d', 'e', 'f'],
    ['4']: ['g', 'h', 'i'],
    ['5']: ['j', 'k', 'l'],
    ['6']: ['m', 'n', 'o'],
    ['7']: ['p', 'q', 'r', 's'],
    ['8']: ['t', 'u', 'v'],
    ['9']: ['w', 'x', 'y', 'z'],
  };

  const res = [];

  const getNum = (str, curr) => {
    if (!str) {
      res.push(curr);
      return;
    }

    for (let i = 0; i < phone[str[0]].length; i++) {
      getNum(str.slice(1), curr + phone[str[0]][i]);
    }
  };

  if (digits) {
    getNum(digits, '');
  }
  return res;
};

// var letterCombinations = function (digits) {
//   const phone = {
//     ['2']: ['a', 'b', 'c'],
//     ['3']: ['d', 'e', 'f'],
//     ['4']: ['g', 'h', 'i'],
//     ['5']: ['j', 'k', 'l'],
//     ['6']: ['m', 'n', 'o'],
//     ['7']: ['p', 'q', 'r', 's'],
//     ['8']: ['t', 'u', 'v'],
//     ['9']: ['w', 'x', 'y', 'z'],
//   };
//   const n = digits.length;
//   if (n == 0) return res;

//   let res = [];

//   function dfs(i, current) {
//     if (i >= n) {
//       res.push(current);
//       return;
//     }
//     for (let c of phone[digits[i]]) {
//       dfs(i + 1, current + c);
//     }
//   }

//   dfs(0, '');
//   return res;
// };

const data = '23';
// const data = '';
// const data = '2';

console.log(letterCombinations(data));
