/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const objMag = new Map();

    for(let i = 0; i< magazine.length; i++){
        if (objMag.has(magazine[i])) {
            objMag.set(magazine[i], objMag.get(magazine[i]) + 1);
        } else {
            objMag.set(magazine[i], 1);
        }
    }


    for(let i = 0; i< ransomNote.length; i++){
        if (objMag.has(ransomNote[i]) && objMag.get(ransomNote[i])) {
            objMag.set(ransomNote[i], objMag.get(ransomNote[i]) - 1);
        } else {
            return false;
        }
    }

    return true;
};

// const data = ['a', 'b'];
// const data = ['aa', 'ab'];
const data = ['aa', 'aab'];
console.log(canConstruct(...data));
