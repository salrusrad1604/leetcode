/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  if (!asteroids.length) return [];

  const res = [asteroids[0]];
  let i = 1;

  while (i < asteroids.length) {
    const curr = asteroids[i];
    const last = res[res.length - 1];

    if (!res.length || last < 0 || curr > 0) {
      res.push(curr);
    } else {
      if (curr + last === 0) {
        res.pop();
      }
      if (curr + last < 0) {
        res.pop();
        continue;
      }
    }

    i++;
  }

  return res;
};

// const data = [5, 10, -5];
// const data = [8, -8];
// const data = [-10, 2, -5];
const data = [10, 2, -5];

console.log(asteroidCollision(data));
