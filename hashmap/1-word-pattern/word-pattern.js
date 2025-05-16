/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ');

    if (pattern.length !== arr.length) {
        return false;
    }

    const ob = new Map();
    const word = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (ob.has(pattern[i])) {
            if (ob.get(pattern[i]) !== arr[i]) {
                return false;
            }
        } else {
            if(word.has(arr[i])) {
                return false;
            }
            ob.set(pattern[i], arr[i]);
        }

        word.has(arr[i]) ? null : word.set(arr[i], null)
    }
    return true;
};

// const data = ["abba", "dog cat cat dog"];
const data = ["abba", "dog cat cat fish"];
// const data = ["aaaa", "dog cat cat dog"];


console.log(wordPattern(...data))