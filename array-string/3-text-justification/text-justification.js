/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = [];
  let i = 0;
  let s = '';

  const addToArr = (str, last) => {
    const arr = str.split('');
    let count = maxWidth - str.length;

    if (str.split(' ').length === 1 || last) {
      arr.push(' '.repeat(count));
    } else {
      while (count) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].trim() === '') {
            arr[j] = arr[j] + ' ';
            if (!--count) {
              break;
            }
          }
        }
      }
    }
    return arr.join('');
  };

  while (i < words.length) {
    if (s.length + words[i].length < maxWidth || !s) {
      s = s + (!s.length ? '' : ' ') + words[i];
      i++;
    } else {
      res.push(addToArr(s));
      s = '';
    }
  }
  if (s) {
    res.push(addToArr(s, true));
  }

  return res;
};

// const data = [['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16];
// const data = [['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16];
const data = [['Listen', 'to', 'many,', 'speak', 'to', 'a', 'few.'], 6];
// const data = [
//   [
//     'Science',
//     'is',
//     'what',
//     'we',
//     'understand',
//     'well',
//     'enough',
//     'to',
//     'explain',
//     'to',
//     'a',
//     'computer.',
//     'Art',
//     'is',
//     'everything',
//     'else',
//     'we',
//     'do',
//   ],
//   20,
// ];

console.log(fullJustify(...data));
