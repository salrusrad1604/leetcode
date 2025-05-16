/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openValid = {
        '{': '}',
        '(': ')',
        '[': ']',
    };

    const stack = [];

    let i = 0;

    while (i < s.length) {
        if (openValid[s[i]]) {
            stack.push(openValid[s[i]]);
            i++;
            continue;
        }

        if (stack.pop() !== s[i]) {
            return false;
        }
        i++
    }
    return stack.length ? false : true;
};

// const str = '()';
// const str = '()[]{}';
// const str = '(]';
// const str = '([])';


console.log(isValid(str))