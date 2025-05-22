/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let count = 1;

  const factArr = [1]; // Сохраняем факториалы

  for (let k = 1; k < n; k++) {
    factArr.push(factArr[k - 1] * k); // Cчитаем все факториалы
  }

  for (let k = 1; k < n; k++) {
    if (2 * k > n) {
      break;
    }
    const total = k + n - 2 * k; // Общее количество цифр в комбинации с учетом k двоек

    count += factArr[total] / (factArr[k] * factArr[total - k]); // биномиальная формула
  }

  return count;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Лучшее решение
// var climbStairs = function (n) {
//   const cache = new Map();

//   function helper(h) {
//     if (h === 1) return 1;
//     if (h === 2) return 2;
//     if (cache.has(h)) return cache.get(h);

//     const value = helper(h - 1) + helper(h - 2);
//     cache.set(h, value);
//     return value;
//   }

//   return helper(n);
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const data = 2; // => 2
// const data = 3; // => 3
// const data = 5; // => 8
const data = 6; // => 13

console.log(climbStairs(data));

// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2

// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 1 2
// 2 2 1

// 1 1 1 1 1 1
// 2 1 1 1 1
// 1 2 1 1 1
// 1 1 2 1 1
// 1 1 1 2 1
// 1 1 1 1 2
// 2 2 1 1
// 2 1 2 1
// 2 1 1 2
// 0 2 2 1
// 1 2 1 2
// 1 1 2 2
// 2 2 2
