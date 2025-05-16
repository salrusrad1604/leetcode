/**
 * @param {string}
 * @return {string}
 */
var reverseWords = function (s) {
    let result = '';

    const arr = s.split(' ')

    while(arr.length) {
        let word = arr.pop();
        if(word === '') {
            continue;
        }

        result = result + ' ' + word;
    }

    return result.trim();
};

const data = 'the sky is blue';
// const data = '  hello world  ';
// const data = 'a good   example';

console.log(reverseWords(data))