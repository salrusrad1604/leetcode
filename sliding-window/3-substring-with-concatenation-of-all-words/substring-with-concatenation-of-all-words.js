/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const wl = words[0].length;
    const res = [];

    let map = new Map();

    const isOne = words.length === 1;

    const obj = {};
    words.forEach((v) => (obj[v] ? (obj[v] = obj[v] + 1) : (obj[v] = 1)));

    const resetMap = () => {
        map.clear();
        for (const [key, value] of Object.entries(obj)) {
            map.set(key, value);
        }
    };

    resetMap();

    for (let i = 0; i < s.length - wl * words.length + 1; i++) {
        const sub = s.slice(i, i + wl);
        const remember = i;
        if (map.has(sub)) {
            map.set(sub, map.get(sub) - 1);

            if (isOne) {
                res.push(remember);
            } else {
                while (true) {
                    i = i + wl;
                    const sub1 = s.slice(i, i + wl);

                    if (map.has(sub1) && map.get(sub1) > 0) {
                        const newVal = map.get(sub1) - 1;
                        map.set(sub1, newVal);

                        if (newVal === 0 && map.values().every((v) => v === 0)) {
                            res.push(remember);
                        } else {
                            continue;
                        }
                    }

                    i = remember;
                    resetMap();
                    break;
                }
            }
        }
    }
    return res;
};

// const data = ['barfoothefoobarman', ['foo', 'bar']];
// const data = ['wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']];
const data = ['barfoofoobarthefoobarman', ['bar', 'foo', 'the']];
// const data = ['a', ['a']];
// const data = ['wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good']];

console.log(findSubstring(...data));


