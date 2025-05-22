/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const count = (f, s, t, step) => {
    if (step === n) {
      return f + s + t;
    }
    return count(s, t, f + s + t, step + 1);
  };
  if (n == 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }
  return count(0, 1, 1, 3);
};

// const data = 4;
const data = 25;
console.log(tribonacci(data));
