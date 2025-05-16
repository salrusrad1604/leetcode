/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    const obj = new Map();

    for (let i = 0; i < s.length; i++) {
        if (obj.has(s[i])) {
            obj.set(s[i], obj.get(s[i]) + 1);
        } else {
            obj.set(s[i], 1);
        }
    }

    
    for (let i = 0; i < t.length; i++) {
        if (obj.has(t[i]) && obj.get(t[i])) {
            obj.set(t[i], obj.get(t[i]) - 1);
        } else {
            return false;
        }
    }

    return true;
};

// const data = ['anagram', 'nagaram'];
const data = ["rat", "car"];


console.log(isAnagram(...data))