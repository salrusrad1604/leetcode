/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const a = haystack.split(needle)
    return a.length > 1 ? a[0].length : -1
};



// const data = ["sadbutsad", "sad"];
const data = ["leetcode", "leeto"];

console.log(strStr(...data))