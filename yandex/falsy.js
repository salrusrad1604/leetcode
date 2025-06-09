function filterFunc(obj) {
  const isArray = Array.isArray(obj);
  const res = isArray ? [] : {};

  if (isArray) {
    for (let val of obj) {
      if (typeof val === 'object' && val !== null) {
        res.push(filterFunc(val));
        continue;
      }
      if (Boolean(val)) {
        res.push(val);
      }
    }
  } else {
    for (let key of Object.keys(obj)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        res[key] = filterFunc(obj[key]);
        continue;
      }
      if (Boolean(obj[key])) {
        res[key] = obj[key];
      }
    }
  }

  return res;
}

// const data = [0, null, 1, false];
// const data = { a: null, b: { c: null, g: '3333' }, d: { e: 'false' } };
const data = [0, [1, 0], [], 0, 1];

console.log(JSON.stringify(filterFunc(data)));
