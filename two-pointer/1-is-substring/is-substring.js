/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (!s.length) {
        return true;
    }
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            if (i === s.length - 1) {
                return true;
            }
            i++;
        }
        j++;
    }

    return false;
};

const data = ['abc', 'ahbgdc'];
// const data = ['axc', 'ahbgdc'];
// const data = ['', 'ahbgdc'];
// const data = ['acb', 'ahbgdc'];

console.log(isSubsequence(...data));
