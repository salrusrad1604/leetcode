/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const ob = new Map();
    const sym = new Map();

    for (let i = 0; i < s.length; i++) {
        if (ob.has(s[i])) {
            if (ob.get(s[i]) !== t[i]) {
                return false;
            }
        } else {
            if(sym.has(t[i])) {
                return false;
            }
            ob.set(s[i], t[i]);
        }

        sym.has(t[i]) ? null : sym.set(t[i], null)
    }
    return true;
};

const data = ['egg', 'add'];
// const data = ['foo', 'bar'];
// const data = ['paper', 'title'];

console.log(isIsomorphic(...data));
