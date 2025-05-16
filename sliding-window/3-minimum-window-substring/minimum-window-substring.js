/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) {
        return '';
    }

    const obj = new Map();

    for (let sym of t) {
        obj.set(sym, obj.has(sym) ? obj.get(sym) + 1 : 1);
    }

    let l = 0;
    let res = '';

    for (let r = 0; r < s.length; r++) {
        if (obj.has(s[r])) {
            const newValue = obj.get(s[r]) - 1;
            obj.set(s[r], newValue);

            if (newValue === 0 && obj.values().every((v) => v <= 0)) {
                while (true) {
                    if (obj.has(s[l])) {
                        const newValue = obj.get(s[l]) + 1;
                        obj.set(s[l], newValue);
                        if (newValue > 0) {
                            if (res.length > r - l + 1 || res === '') {
                                res = s.slice(l, r + 1);
                            }
                            l++;
                            break;
                        }
                    }
                    l++;
                }
            }
        }
    }

    return res;
};

const data = ['ADOBECODEBANC', 'ABC'];
// const data = ['a', 'a'];
// const data = ['a', 'aa'];

console.log(minWindow(...data));
