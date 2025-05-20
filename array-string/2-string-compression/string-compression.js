/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!chars.length) return 0;

  let str = '';
  let currChar = chars[0];
  let i = 1;
  let count = 1;

  while (i < chars.length) {
    if (currChar === chars[i]) {
      count++;
    } else {
      str += `${currChar}${count > 1 ? count : ''}`;
      count = 1;
      currChar = chars[i];
    }
    i++;
  }
  str += `${currChar}${count > 1 ? count : ''}`;
  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i];
  }

  return str.length;
};

// Лучшее решение
var compress = function (chars) {
  let left = 0,
    right = 1,
    ptr = 0;

  while (right <= chars.length) {
    if (chars[left] === chars[right]) {
      right++;
    } else {
      let count = right - left;
      chars[ptr++] = chars[left];
      if (count > 1) {
        for (let digit of String(right - left)) {
          chars[ptr++] = digit;
        }
      }
      left = right++;
    }
  }
  return ptr;
};

const data = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
// const data = ['a'];
// const data = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];

console.log(compress(data));
