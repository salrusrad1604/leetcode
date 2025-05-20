/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let i = 0;

  const decode = s => {
    let res = [];
    let number = '';

    while (i < s.length) {
      if (s[i] === '[') {
        i++;
        res.push(decode(s).repeat(Number(number)));
        number = '';
      } else if (s[i] === ']') {
        i++;
        return res.join('');
      } else {
        if (isNaN(s[i])) {
          res.push(s[i]);
        } else {
          number += s[i];
        }
        i++;
      }
    }

    return res.join('');
  };

  return decode(s);
};

const data = '3[a]2[bc]';
// const data = '3[a2[c]]';
// const data = '2[abc]3[cd]ef';
// const data = '3[z]2[2[y]pq4[2[jk]e1[f]]]ef';

console.log(decodeString(data));
