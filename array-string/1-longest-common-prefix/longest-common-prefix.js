/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = '';

    if (!strs.length) {
        return result;
    }

    if (strs.length === 1) {
        return strs[0];
    }

    let key = strs.reduce((acc, curr) => {
        if (acc.length > curr.length) {
            return curr;
        }
        return acc;
    }, strs[0]);

    let include = true;
    let index = 0;
    while (include && index < key.length) {
        let letter = key[index];
        for (let i = 0; i < strs.length; i++) {
            if (!strs[i].startsWith(result + letter)) {
                include = false;
                break;
            }
        }
        if (include) {
            result = result + letter;
        }
        index++;
    }
    return result;
};

// const data = ['flower', 'flow', 'flight'];
const data = ["dog","racecar","car"];

console.log(longestCommonPrefix(data));
