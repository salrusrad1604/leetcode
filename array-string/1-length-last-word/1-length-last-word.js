/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = 0;

    last = s.length - 1;

    while(last >= 0) {
        console.log(s[last])
        if(s[last] !== ' ') {
            result++
        }else if (s[last] === ' ' && result) {
            break;
        }

        last--;
    }
    
    return result;
};





// const string = "Hello World";
// const string = "   fly me   to   the moon  ";
const string = "luffy is still joyboy";

console.log(lengthOfLastWord(string))

