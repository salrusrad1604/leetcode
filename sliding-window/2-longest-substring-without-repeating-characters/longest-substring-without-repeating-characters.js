/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (string) {
    let promres = '';
    let res = 0;

    for (let r = 0; r < string.length; r++) {
        if (promres.includes(string[r])) {
            while (promres.includes(string[r])) {
                console.log(promres);
                promres = promres.slice(1);
            }
        }

        promres += string[r];
        res = Math.max(promres.length, res);
    }

    return res;
};

// const data = 'abcabcbb';
// const data = 'bbbbb';
const data = 'pwwkew';

console.log(lengthOfLongestSubstring(data));
