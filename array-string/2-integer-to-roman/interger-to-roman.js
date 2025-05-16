/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const rom = [
        'M',
        'CM',
        'D',
        'CD',
        'C',
        'XC',
        'L',
        'XL',
        'X',
        'IX',
        'V',
        'IV',
        'I',
    ];

    let ans = '';
    for (let i = 0; num; i++)
        while (num >= val[i]) {
            ans += rom[i];
            num -= val[i];
        }
    return ans;
};

const data = 3749; // => "MMMDCCXLIX"
// const data = 58; // => "LVIII"
// const data = 1994; // => "MCMXCIV"

console.log(intToRoman(data));
