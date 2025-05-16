/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const result = new Array(numRows).fill('');

    if (numRows === 1) {
        return s;
    }
    const cicle = 2*(numRows -1);

    let index = 0;
    while (index < s.length) {
        if(index % cicle < (numRows - 1)) {
            result[index % cicle] = result[index % cicle] + s[index];
        }
        else if (cicle - (index % cicle) <= (numRows - 1)) {
            result[cicle - (index % cicle)] = result[cicle - (index % cicle)] + s[index]
        }

        index++;
    }

    return result.join('');
};

const data = ['PAYPALISHIRING', 3];
// const data = ["PAYPALISHIRING", 4]
// const data = ["A", 1]

console.log(convert(...data));
